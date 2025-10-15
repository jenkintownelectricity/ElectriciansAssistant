# Google Calendar Integration Setup Guide

The Electrician's Assistant now includes real-time schedule integration with Google Calendar!

## Features

- **Real-time schedule display** - View today's appointments in a collapsible sidebar
- **Multiple calendar support** - Track Emergency, Panel Install, Service Call, and Estimate jobs
- **Color-coded job types** - Visual identification of job priorities
- **Event details** - Click any appointment to see full details with client info
- **Auto-refresh** - Schedule updates automatically every 5 minutes
- **Revenue tracking** - See estimated daily revenue from all jobs
- **Mobile responsive** - Sidebar collapses on smaller screens

## Setup Instructions

### Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable the **Google Calendar API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

### Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client ID"
3. Configure OAuth consent screen (if prompted):
   - User Type: External
   - App name: "Electrician's Assistant"
   - Support email: your email
   - Add scope: `https://www.googleapis.com/auth/calendar.readonly`
4. Create OAuth Client ID:
   - Application type: Web application
   - Name: "Electrician's Assistant Web Client"
   - Authorized JavaScript origins: `http://localhost:5173`
   - Authorized redirect URIs: `http://localhost:5173`
5. Copy the **Client ID** (you'll need this)

### Step 3: Create API Key

1. Still in "Credentials", click "Create Credentials" > "API Key"
2. Copy the **API Key** (you'll need this)
3. (Optional) Click "Restrict Key" to limit to Calendar API only

### Step 4: Get Your Calendar IDs

You need the Calendar IDs for your 4 booking calendars:

1. Open [Google Calendar](https://calendar.google.com/)
2. For each calendar (Emergency, Panel Install, Service Call, Estimate):
   - Click the calendar name in the left sidebar
   - Click the 3 dots > "Settings and sharing"
   - Scroll to "Integrate calendar"
   - Copy the **Calendar ID** (looks like: `abc123@group.calendar.google.com`)

### Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   # From Step 2
   VITE_GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com

   # From Step 3
   VITE_GOOGLE_API_KEY=your-api-key-here

   # From Step 4
   VITE_CALENDAR_EMERGENCY=emergency-calendar-id@group.calendar.google.com
   VITE_CALENDAR_PANEL=panel-install-calendar-id@group.calendar.google.com
   VITE_CALENDAR_SERVICE=service-call-calendar-id@group.calendar.google.com
   VITE_CALENDAR_ESTIMATE=estimate-calendar-id@group.calendar.google.com
   ```

3. **Important**: Add `.env.local` to your `.gitignore` (already done)

### Step 6: Restart Development Server

```bash
npm run dev
```

### Step 7: Sign In

1. Open the app: `http://localhost:5173`
2. Look for the schedule sidebar on the right side
3. Click "Sign in with Google"
4. Grant permission to read your calendars
5. Your schedule will load automatically!

## Usage

### Viewing Schedule

- **Today's appointments** appear in the right sidebar
- **Color-coded** by job type:
  - 🚨 Red = Emergency
  - ⚡ Blue = Panel Install
  - 🔧 Yellow = Service Call
  - 📋 Green = Estimate

### Event Details

- **Click any event** to see:
  - Client name and contact info
  - Location with "Get Directions" button
  - Job duration and time
  - Status (Upcoming, In Progress, Completed)
  - Quick actions: Call, Email, Navigate

### Sidebar Controls

- **Refresh icon** - Manually refresh schedule
- **Collapse arrow** - Collapse sidebar to save space
- **Stats** - View totals: Jobs, Revenue, Status counts

## Calendar Event Format

For best results, format your Google Calendar events like this:

**Event Title**:
```
John Doe - (555) 123-4567
```
or
```
Jane Smith
```

**Description** (optional):
```
Client email: john@example.com
Special instructions: Gate code 1234
```

**Location**:
```
123 Main St, City, State 12345
```

The app will automatically extract:
- Client name from title
- Phone number from title or description
- Email from description
- Location for directions

## Troubleshooting

### "Not signed in to Google Calendar"
- Make sure you clicked "Sign in with Google" in the sidebar
- Check browser console for errors
- Verify OAuth credentials in Google Cloud Console

### "No appointments today"
- Check that calendar IDs in `.env.local` are correct
- Verify you have events in those calendars for today
- Try the refresh button in the sidebar

### Calendar events not loading
- Open browser dev tools (F12) and check for errors
- Verify API key and Client ID are correct
- Make sure Calendar API is enabled in Google Cloud Console
- Check that authorized origins include `http://localhost:5173`

### CORS errors
- Verify authorized JavaScript origins in OAuth settings
- Make sure you're accessing from `http://localhost:5173` (not IP address)

## Development Tips

- The calendar refreshes automatically every 5 minutes
- Events are cached locally for offline fallback
- The hook `useGoogleCalendar()` is reusable in other components
- Customize revenue estimates in `googleCalendarService.js`

## Browser Compatibility

- ✅ Chrome / Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ❌ IE11 (not supported)

## Next Steps

Want to extend the calendar integration? Here are some ideas:

- [ ] Add weather warnings for outdoor jobs
- [ ] Route optimization with Google Maps API
- [ ] SMS notifications before appointments
- [ ] Material list generation from job notes
- [ ] End-of-day report generation
- [ ] Voice commands for schedule queries

## Support

If you encounter issues:

1. Check this guide first
2. Review browser console errors
3. Verify all environment variables are set
4. Test with a simple calendar first

---

Made with ⚡ by Claude Code

