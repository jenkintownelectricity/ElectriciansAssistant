import { gapi } from 'gapi-script'

// Job type to color mapping
const JOB_TYPES = {
  EMERGENCY: { color: '#EF4444', label: 'Emergency' },
  PANEL: { color: '#3B82F6', label: 'Panel Install' },
  SERVICE: { color: '#EAB308', label: 'Service Call' },
  ESTIMATE: { color: '#10B981', label: 'Estimate' }
}

class GoogleCalendarService {
  constructor() {
    this.isInitialized = false
    this.isSignedIn = false
    this.calendarIds = {
      emergency: import.meta.env.VITE_CALENDAR_EMERGENCY || 'primary',
      panel: import.meta.env.VITE_CALENDAR_PANEL || 'primary',
      service: import.meta.env.VITE_CALENDAR_SERVICE || 'primary',
      estimate: import.meta.env.VITE_CALENDAR_ESTIMATE || 'primary'
    }
    this.cachedEvents = []
    this.refreshInterval = null
  }

  /**
   * Initialize Google API and set up OAuth
   */
  async initialize() {
    if (this.isInitialized) return true

    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

    if (!CLIENT_ID || !API_KEY) {
      console.error('Google Calendar: Missing API credentials in .env')
      return false
    }

    try {
      await new Promise((resolve, reject) => {
        gapi.load('client:auth2', {
          callback: resolve,
          onerror: reject
        })
      })

      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
      })

      // Listen for sign-in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {
        this.isSignedIn = isSignedIn
      })

      // Check if user is already signed in
      this.isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get()
      this.isInitialized = true

      console.log('Google Calendar initialized successfully')
      return true
    } catch (error) {
      console.error('Failed to initialize Google Calendar:', error)
      return false
    }
  }

  /**
   * Sign in with Google OAuth
   */
  async signIn() {
    if (!this.isInitialized) {
      await this.initialize()
    }

    try {
      await gapi.auth2.getAuthInstance().signIn()
      this.isSignedIn = true
      return true
    } catch (error) {
      console.error('Sign in failed:', error)
      return false
    }
  }

  /**
   * Sign out from Google
   */
  async signOut() {
    try {
      await gapi.auth2.getAuthInstance().signOut()
      this.isSignedIn = false
      this.cachedEvents = []
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval)
      }
      return true
    } catch (error) {
      console.error('Sign out failed:', error)
      return false
    }
  }

  /**
   * Check if user is signed in
   */
  isUserSignedIn() {
    return this.isSignedIn
  }

  /**
   * Fetch events from a specific calendar
   */
  async fetchCalendarEvents(calendarId, timeMin, timeMax, jobType) {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarId,
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime'
      })

      const events = response.result.items || []

      return events.map(event => this.formatEvent(event, jobType))
    } catch (error) {
      console.error(`Failed to fetch events from ${calendarId}:`, error)
      return []
    }
  }

  /**
   * Format calendar event into app structure
   */
  formatEvent(event, jobType) {
    const clientInfo = this.extractClientInfo(event)
    const startTime = new Date(event.start.dateTime || event.start.date)
    const endTime = new Date(event.end.dateTime || event.end.date)

    return {
      id: event.id,
      title: event.summary || 'Untitled Event',
      description: event.description || '',
      location: event.location || '',
      startTime,
      endTime,
      duration: Math.round((endTime - startTime) / 60000), // minutes
      jobType,
      color: JOB_TYPES[jobType]?.color || '#6B7280',
      jobTypeLabel: JOB_TYPES[jobType]?.label || 'Other',
      client: clientInfo,
      status: this.getEventStatus(startTime, endTime),
      notes: event.description || ''
    }
  }

  /**
   * Extract client info from event title/description
   * Looks for patterns like: "John Doe - 555-1234" or "Jane Smith (555-9876)"
   */
  extractClientInfo(event) {
    const text = `${event.summary || ''} ${event.description || ''}`

    // Extract phone number
    const phoneMatch = text.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/)
    const phone = phoneMatch ? phoneMatch[0] : null

    // Extract name (usually before phone or hyphen)
    let name = event.summary || 'No Name'
    if (phoneMatch) {
      name = event.summary.split(phoneMatch[0])[0].trim()
    } else if (event.summary.includes(' - ')) {
      name = event.summary.split(' - ')[0].trim()
    }

    // Extract email if present
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/)
    const email = emailMatch ? emailMatch[0] : null

    return {
      name,
      phone,
      email
    }
  }

  /**
   * Get event status based on current time
   */
  getEventStatus(startTime, endTime) {
    const now = new Date()

    if (now < startTime) {
      return 'upcoming'
    } else if (now >= startTime && now <= endTime) {
      return 'in-progress'
    } else {
      return 'completed'
    }
  }

  /**
   * Fetch today's schedule from all booking calendars
   */
  async fetchTodaysSchedule() {
    if (!this.isSignedIn) {
      console.warn('Not signed in to Google Calendar')
      return this.cachedEvents
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    try {
      const [emergencyEvents, panelEvents, serviceEvents, estimateEvents] = await Promise.all([
        this.fetchCalendarEvents(this.calendarIds.emergency, today, tomorrow, 'EMERGENCY'),
        this.fetchCalendarEvents(this.calendarIds.panel, today, tomorrow, 'PANEL'),
        this.fetchCalendarEvents(this.calendarIds.service, today, tomorrow, 'SERVICE'),
        this.fetchCalendarEvents(this.calendarIds.estimate, today, tomorrow, 'ESTIMATE')
      ])

      const allEvents = [
        ...emergencyEvents,
        ...panelEvents,
        ...serviceEvents,
        ...estimateEvents
      ].sort((a, b) => a.startTime - b.startTime)

      this.cachedEvents = allEvents
      return allEvents
    } catch (error) {
      console.error('Failed to fetch today\'s schedule:', error)
      return this.cachedEvents
    }
  }

  /**
   * Fetch week's schedule
   */
  async fetchWeekSchedule() {
    if (!this.isSignedIn) {
      console.warn('Not signed in to Google Calendar')
      return []
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const nextWeek = new Date(today)
    nextWeek.setDate(nextWeek.getDate() + 7)

    try {
      const [emergencyEvents, panelEvents, serviceEvents, estimateEvents] = await Promise.all([
        this.fetchCalendarEvents(this.calendarIds.emergency, today, nextWeek, 'EMERGENCY'),
        this.fetchCalendarEvents(this.calendarIds.panel, today, nextWeek, 'PANEL'),
        this.fetchCalendarEvents(this.calendarIds.service, today, nextWeek, 'SERVICE'),
        this.fetchCalendarEvents(this.calendarIds.estimate, today, nextWeek, 'ESTIMATE')
      ])

      return [
        ...emergencyEvents,
        ...panelEvents,
        ...serviceEvents,
        ...estimateEvents
      ].sort((a, b) => a.startTime - b.startTime)
    } catch (error) {
      console.error('Failed to fetch week\'s schedule:', error)
      return []
    }
  }

  /**
   * Start auto-refresh (every 5 minutes)
   */
  startAutoRefresh(callback) {
    // Clear any existing interval
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }

    // Refresh every 5 minutes (300000ms)
    this.refreshInterval = setInterval(async () => {
      const events = await this.fetchTodaysSchedule()
      if (callback) {
        callback(events)
      }
    }, 300000)

    console.log('Auto-refresh started (5 minute interval)')
  }

  /**
   * Stop auto-refresh
   */
  stopAutoRefresh() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
      this.refreshInterval = null
      console.log('Auto-refresh stopped')
    }
  }

  /**
   * Calculate total revenue for events
   */
  calculateRevenue(events, estimatePerJob = {
    EMERGENCY: 500,
    PANEL: 2000,
    SERVICE: 300,
    ESTIMATE: 0
  }) {
    return events.reduce((total, event) => {
      return total + (estimatePerJob[event.jobType] || 0)
    }, 0)
  }

  /**
   * Get cached events (offline fallback)
   */
  getCachedEvents() {
    return this.cachedEvents
  }
}

// Export singleton instance
const googleCalendarService = new GoogleCalendarService()
export default googleCalendarService
