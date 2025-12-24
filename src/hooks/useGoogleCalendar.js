import { useState, useEffect, useCallback } from 'react'
import googleCalendarService from '../services/googleCalendarService'

/**
 * Custom hook for Google Calendar integration
 * Handles authentication, fetching events, and auto-refresh
 */
export function useGoogleCalendar() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)

  // Initialize Google Calendar API on mount
  useEffect(() => {
    const init = async () => {
      setIsLoading(true)
      try {
        const success = await googleCalendarService.initialize()
        setIsInitialized(success)
        setIsSignedIn(googleCalendarService.isUserSignedIn())

        // If already signed in, fetch events
        if (googleCalendarService.isUserSignedIn()) {
          await fetchEvents()
        }
      } catch (err) {
        setError(err.message)
        console.error('Failed to initialize Google Calendar:', err)
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [])

  // Set up auto-refresh when signed in
  useEffect(() => {
    if (isSignedIn) {
      googleCalendarService.startAutoRefresh((newEvents) => {
        setEvents(newEvents)
      })

      return () => {
        googleCalendarService.stopAutoRefresh()
      }
    }
  }, [isSignedIn])

  /**
   * Sign in to Google
   */
  const signIn = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const success = await googleCalendarService.signIn()
      if (success) {
        setIsSignedIn(true)
        await fetchEvents()
      } else {
        setError('Failed to sign in')
      }
    } catch (err) {
      setError(err.message)
      console.error('Sign in error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Sign out from Google
   */
  const signOut = useCallback(async () => {
    try {
      await googleCalendarService.signOut()
      setIsSignedIn(false)
      setEvents([])
    } catch (err) {
      setError(err.message)
      console.error('Sign out error:', err)
    }
  }, [])

  /**
   * Fetch today's events
   */
  const fetchEvents = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const todaysEvents = await googleCalendarService.fetchTodaysSchedule()
      setEvents(todaysEvents)
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch events:', err)
      // Fall back to cached events if available
      setEvents(googleCalendarService.getCachedEvents())
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Fetch week's events
   */
  const fetchWeekEvents = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const weekEvents = await googleCalendarService.fetchWeekSchedule()
      return weekEvents
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch week events:', err)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  /**
   * Refresh events manually
   */
  const refreshEvents = useCallback(async () => {
    await fetchEvents()
  }, [fetchEvents])

  /**
   * Get current event (if any job is in progress)
   */
  const getCurrentEvent = useCallback(() => {
    return events.find(event => event.status === 'in-progress') || null
  }, [events])

  /**
   * Get next upcoming event
   */
  const getNextEvent = useCallback(() => {
    const upcomingEvents = events.filter(event => event.status === 'upcoming')
    return upcomingEvents[0] || null
  }, [events])

  /**
   * Get events by job type
   */
  const getEventsByType = useCallback((jobType) => {
    return events.filter(event => event.jobType === jobType)
  }, [events])

  /**
   * Calculate estimated revenue for today
   */
  const getTodaysRevenue = useCallback(() => {
    return googleCalendarService.calculateRevenue(events)
  }, [events])

  /**
   * Get event statistics
   */
  const getStats = useCallback(() => {
    const stats = {
      total: events.length,
      completed: events.filter(e => e.status === 'completed').length,
      inProgress: events.filter(e => e.status === 'in-progress').length,
      upcoming: events.filter(e => e.status === 'upcoming').length,
      byType: {
        EMERGENCY: events.filter(e => e.jobType === 'EMERGENCY').length,
        PANEL: events.filter(e => e.jobType === 'PANEL').length,
        SERVICE: events.filter(e => e.jobType === 'SERVICE').length,
        ESTIMATE: events.filter(e => e.jobType === 'ESTIMATE').length
      },
      revenue: getTodaysRevenue()
    }

    return stats
  }, [events, getTodaysRevenue])

  return {
    // State
    isInitialized,
    isSignedIn,
    isLoading,
    events,
    error,

    // Actions
    signIn,
    signOut,
    fetchEvents,
    fetchWeekEvents,
    refreshEvents,

    // Computed
    getCurrentEvent,
    getNextEvent,
    getEventsByType,
    getTodaysRevenue,
    getStats
  }
}
