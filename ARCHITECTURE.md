# Architecture Documentation

## Overview

Electrician's Assistant is an AI-powered electrical safety inspection and NEC 2023 code reference tool. The application uses a React frontend with a Flask backend, integrating Claude AI for image analysis.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend                                 │
│  React 19 + Vite + Tailwind CSS + shadcn/ui                    │
│  Port: 5173 (development) | Railway (production)               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP API calls
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Backend                                  │
│  Flask + Flask-CORS                                             │
│  Port: 5000 (local) | Railway (production)                     │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐    ┌──────────┐    ┌──────────┐
        │ Claude   │    │ Google   │    │ Google   │
        │ AI API   │    │ Calendar │    │ Sheets   │
        │ (Vision) │    │ API      │    │ (NEC DB) │
        └──────────┘    └──────────┘    └──────────┘
```

## Directory Structure

```
ElectriciansAssistant/
├── src/                              # Frontend source code
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components (48 components)
│   │   ├── EnhancedCodeCard.jsx      # Enhanced NEC code display
│   │   ├── EnhancedSearchBar.jsx     # Improved search component
│   │   ├── EventDetailModal.jsx      # Calendar event details
│   │   ├── ImprovedHome.jsx          # Redesigned home page
│   │   ├── QuickAccessBar.jsx        # Quick navigation bar
│   │   ├── ScheduleSidebar.jsx       # Google Calendar sidebar
│   │   ├── SkeletonLoader.jsx        # Loading state components
│   │   └── VoiceDocumentation.jsx    # Voice notes feature
│   ├── config/
│   │   └── versions.js               # Tiered product configuration
│   ├── data/
│   │   ├── electricalProblems.js     # 30 electrical problems (1264 lines)
│   │   └── necCodes.js               # 170+ NEC codes (1530 lines)
│   ├── hooks/
│   │   ├── use-mobile.js             # Mobile breakpoint detection
│   │   └── useGoogleCalendar.js      # Google Calendar hook
│   ├── services/
│   │   └── googleCalendarService.js  # Calendar API integration
│   ├── styles/
│   │   └── theme.js                  # Theme configuration
│   ├── lib/
│   │   └── utils.js                  # Utility functions (cn, clsx)
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Tailwind CSS styles
│   └── main.jsx                      # React entry point
├── backend/
│   ├── main.py                       # Flask API server
│   ├── requirements.txt              # Python dependencies
│   ├── .env.example                  # Environment template
│   ├── Procfile                      # Railway deployment
│   └── railway.toml                  # Railway configuration
├── public/
│   └── logo.png                      # Application logo
├── package.json                      # Node.js dependencies
├── package-lock.json                 # Package lock file
├── vite.config.js                    # Vite configuration
├── nixpacks.toml                     # Nixpacks deployment config
├── railway.json                      # Railway project config
└── .env.example                      # Frontend environment template
```

## Content Database

### Electrical Problems (30 Total)

**Categories by Severity:**
- Critical: 5 problems (immediate safety hazards)
- High: 8 problems (significant safety concerns)
- Medium: 10 problems (code violations, inconveniences)
- Low: 7 problems (minor issues, upgrades)

**Problems Include:**
1. Circuit Breaker Keeps Tripping
2. GFCI Outlet Keeps Tripping
3. Dead Outlet - No Power
4. Flickering Lights
5. Buzzing/Humming from Outlet/Switch
6. Hot Outlet or Switch Plate
7. Burning Smell from Outlet/Panel
8. Sparking Outlet
9. Two-Prong Outlets (Ungrounded)
10. Light Switch Not Working
11. Reversed Polarity
12. AFCI Breaker Nuisance Tripping
13. Aluminum Wiring Issues
14. Overloaded Electrical Panel
15. Outdated Electrical Panel
16. Missing GFCI Protection
17. Improper Wire Splicing
18. Loose Wire Connections
19. Missing Junction Box Covers
20. Insufficient Lighting Outlets
21. Shared Neutral Circuits
22. Missing Arc-Fault Protection
23. Electrical Box Overfill
24. Improper Grounding
25. Incorrect Wire Gauge
26. Backstabbed Outlets
27. Federal Pacific Panels
28. Doorbell Not Working
29. + more...

### NEC 2023 Code Database (170+ Codes)

**Articles Covered:**
| Article | Title | Codes |
|---------|-------|-------|
| 110 | General Requirements | 17 codes |
| 210 | Branch Circuits | 23 codes |
| 240 | Overcurrent Protection | 13 codes |
| 250 | Grounding & Bonding | 19 codes |
| 310 | Conductors | 13 codes |
| 314 | Boxes & Enclosures | 12 codes |
| 334 | NM Cable (Romex) | 10 codes |
| 404 | Switches | 11 codes |
| 406 | Receptacles | 15 codes |
| 408 | Panelboards | 12 codes |
| 410 | Lighting/Luminaires | 12 codes |

## Frontend Architecture

### Technology Stack
- **React 19.1** - UI framework with hooks
- **Vite 6.3.5** - Build tool and development server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion 12.15** - Animation library
- **Lucide React 0.510** - Icon library
- **React Hook Form 7.56** - Form management
- **@react-oauth/google** - Google OAuth integration
- **gapi-script** - Google API client

### Main Application Views

| View | Description |
|------|-------------|
| `home` | Landing page with ImprovedHome component |
| `top3` | Top 3 most common problems |
| `next10` | Next 10 common problems |
| `index` | Full problem index with search |
| `nec-database` | NEC code browser with search |
| `problem-detail` | Individual problem details with NEC codes |
| `photo-analysis` | Photo upload and AI analysis interface |

### Custom Components

| Component | Purpose |
|-----------|---------|
| `ImprovedHome.jsx` | Redesigned home with quick access |
| `EnhancedSearchBar.jsx` | Advanced search with filters |
| `EnhancedCodeCard.jsx` | Rich NEC code display |
| `QuickAccessBar.jsx` | Quick navigation toolbar |
| `ScheduleSidebar.jsx` | Google Calendar integration |
| `EventDetailModal.jsx` | Calendar event popup |
| `VoiceDocumentation.jsx` | Hands-free voice notes |
| `SkeletonLoader.jsx` | Loading state placeholders |

### Google Calendar Integration

**Features:**
- Real-time schedule sidebar
- Job type color coding
- Event details modal
- Route optimization ready

**Configuration (`.env.example`):**
```
VITE_GOOGLE_CLIENT_ID=your-client-id
VITE_GOOGLE_API_KEY=your-api-key
VITE_GOOGLE_MAPS_API_KEY=your-maps-key
VITE_CALENDAR_EMERGENCY=calendar-id
VITE_CALENDAR_PANEL=calendar-id
VITE_CALENDAR_SERVICE=calendar-id
VITE_CALENDAR_ESTIMATE=calendar-id
```

## Backend Architecture

### Technology Stack
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **python-dotenv** - Environment variable management
- **Anthropic Claude API** - AI image analysis (Claude 3.5 Sonnet)
- **requests** - HTTP client for external APIs

### Configuration

Backend environment variables (`backend/.env`):
```
ANTHROPIC_API_KEY=your-key-here
GOOGLE_SHEETS_BASE_URL=optional-sheets-url
APP_VERSION=residential
APP_TIER=basic
ENABLE_DEV_MODE=true
ENABLE_PHOTO_ANALYSIS=true
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/version` | GET | Get current app version and capabilities |
| `/api/nec-codes` | GET | Fetch all NEC codes (tier-aware) |
| `/api/nec-codes/search?q=` | GET | Search codes with relevance scoring |
| `/api/nec-codes/article/{num}` | GET | Get codes for specific article |
| `/api/analyze` | POST | AI photo analysis with Claude Vision |
| `/api/dev/submit-code` | POST | Submit NEC codes (dev mode) |
| `/api/health` | GET | Health check |

### AI Photo Analysis

The `/api/analyze` endpoint provides context-aware analysis:

**Request:**
```json
{
  "image": "base64-encoded-image",
  "problem": "Circuit Breaker Keeps Tripping",
  "context": "Problem description for context"
}
```

**Response:**
```json
{
  "issues": [
    {
      "type": "critical|warning|info",
      "title": "Issue title",
      "description": "Detailed description",
      "location": "Where in image",
      "nec_reference": "210.8(A)",
      "riskLevel": "immediate|high|medium|low",
      "recommendation": "Action required"
    }
  ],
  "recommendations": ["Action 1", "Action 2"],
  "compliance_status": "Compliant|Non-Compliant|Needs Review",
  "safety_rating": "Low Risk|Moderate Risk|High Risk|Critical",
  "summary": "Overall assessment"
}
```

## Deployment

### Railway Configuration

**Frontend (`railway.json`):**
- Node.js build with Vite
- Static file serving

**Backend (`backend/railway.toml`):**
- Python with Flask
- Procfile for startup

### Environment Setup

1. Set `ANTHROPIC_API_KEY` in Railway backend
2. Configure Google OAuth credentials
3. Set calendar IDs if using calendar integration

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or pnpm

### Installation

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
```

### Running Development Servers

```bash
# Terminal 1: Backend
cd backend
python main.py

# Terminal 2: Frontend
npm run dev
```

### Build for Production

```bash
npm run build
```

## Version/Tier System

| Tier | Articles | Features | Price |
|------|----------|----------|-------|
| Residential | 11 articles | code_lookup, search, photo_analysis, basic_troubleshooting | $29/mo or $199/yr |
| Commercial | 34 articles | + load_calculations, three_phase_support, commercial_equipment | $79/mo or $599/yr |
| Enterprise | All NEC | + team_management, analytics_dashboard, custom_reports, api_access | Custom |

## Security Considerations

- API keys stored in environment variables (not committed)
- `.gitignore` configured to exclude `.env` files
- All image analysis performed server-side
- CORS configured for development and production
- Google OAuth for calendar authentication

## File Reference

| File | Lines | Purpose |
|------|-------|---------|
| `backend/main.py` | ~500 | Flask API server |
| `src/App.jsx` | ~730 | Main React application |
| `src/config/versions.js` | ~200 | Tier configuration |
| `src/data/electricalProblems.js` | 1264 | 30 problems database |
| `src/data/necCodes.js` | 1530 | 170+ NEC codes |
| `src/components/VoiceDocumentation.jsx` | 425 | Voice notes feature |
| `src/services/googleCalendarService.js` | 335 | Calendar API |
