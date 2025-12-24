# Architecture Documentation

## Overview

Electrician's Assistant is an AI-powered electrical safety inspection and NEC 2023 code reference tool. The application uses a React frontend with a Flask backend, integrating Claude AI for image analysis.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend                                 │
│  React 19 + Vite + Tailwind CSS + shadcn/ui                    │
│  Port: 5173 (development)                                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP (proxied via Vite)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Backend                                  │
│  Flask + Flask-CORS                                             │
│  Port: 5000                                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐    ┌──────────┐    ┌──────────┐
        │ Claude   │    │ Google   │    │ Local    │
        │ AI API   │    │ Sheets   │    │ Data     │
        │ (Vision) │    │ (NEC DB) │    │ Files    │
        └──────────┘    └──────────┘    └──────────┘
```

## Directory Structure

```
ElectriciansAssistant/
├── src/                              # Frontend source code
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components (48 components)
│   │   ├── DevModeSubmission.jsx     # NEC code submission form
│   │   └── UpgradePrompt.jsx         # Tier upgrade modal
│   ├── config/
│   │   └── versions.js               # Tiered product configuration
│   ├── data/
│   │   ├── electricalProblems.js     # Electrical problems database
│   │   └── necCodes.js               # NEC 2023 code references
│   ├── hooks/
│   │   └── use-mobile.js             # Mobile breakpoint detection
│   ├── lib/
│   │   └── utils.js                  # Utility functions (cn, clsx)
│   ├── assets/                       # Static assets
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Tailwind CSS styles
│   └── main.jsx                      # React entry point
├── backend/
│   ├── src/
│   │   └── main.py                   # Flask API server
│   ├── requirements.txt              # Python dependencies
│   └── .env.example                  # Environment variable template
├── public/                           # Static public assets
├── package.json                      # Node.js dependencies
├── pnpm-lock.yaml                    # Package lock file
├── vite.config.js                    # Vite configuration
├── jsconfig.json                     # Path alias configuration
├── components.json                   # shadcn/ui configuration
└── eslint.config.js                  # ESLint configuration
```

## Frontend Architecture

### Technology Stack
- **React 19.1** - UI framework with hooks
- **Vite 6.3.5** - Build tool and development server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion 12.15** - Animation library
- **Lucide React 0.510** - Icon library
- **React Hook Form 7.56** - Form management
- **Zod 3.24** - Schema validation

### Main Application Views

The app uses a state-based routing system with the following views:

| View | Description |
|------|-------------|
| `home` | Landing page with top 3 problems and search |
| `top3` | Top 3 most common problems |
| `next10` | Next 10 common problems |
| `index` | Full problem index with search |
| `problem-detail` | Individual problem details with NEC codes |
| `photo-analysis` | Photo upload and AI analysis interface |

### Component Hierarchy

```
App.jsx
├── Header
│   ├── Version Badge
│   └── Navigation
├── Main Content (view-based)
│   ├── Home View
│   │   ├── Search Input
│   │   ├── Top 3 Problems Cards
│   │   └── Navigation Buttons
│   ├── Problem Detail View
│   │   ├── Problem Header
│   │   ├── Common Causes
│   │   ├── Troubleshooting Steps
│   │   ├── NEC Code References
│   │   └── Photo Instructions
│   └── Photo Analysis View
│       ├── Photo Instructions
│       ├── Upload Area
│       └── Analysis Results
├── DevModeSubmission (conditional)
├── UpgradePrompt Modal (conditional)
└── Footer
```

### Custom Components

#### DevModeSubmission (`src/components/DevModeSubmission.jsx`)
Form for submitting NEC codes during field testing.

**Fields:**
- Code (required) - e.g., "210.8(A)"
- Article (required) - e.g., "210"
- Title (required)
- Description (required)
- Category, Application, Safety Notes, Related Codes, Common Violations, Photo Tips (optional)

#### UpgradePrompt (`src/components/UpgradePrompt.jsx`)
Modal displaying upgrade options for higher tiers.

**Features:**
- Shows next tier features and pricing
- Displays annual savings calculations
- Feature comparison between tiers

### Version Configuration (`src/config/versions.js`)

Three-tier product system:

| Tier | Articles | Features | Price |
|------|----------|----------|-------|
| Residential | 11 articles | code_lookup, search, photo_analysis, basic_troubleshooting, dev_mode | $29/mo or $199/yr |
| Commercial | 34 articles | + load_calculations, three_phase_support, commercial_equipment | $79/mo or $599/yr |
| Enterprise | All NEC | + team_management, analytics_dashboard, custom_reports, api_access, priority_support | Custom |

**Helper Functions:**
- `getCurrentVersion()` - Returns active tier configuration
- `hasFeature(featureName)` - Checks feature availability
- `hasArticle(articleNumber)` - Checks article access
- `getNextTier(currentTierId)` - Returns next tier for upgrades
- `calculateAnnualSavings(tier)` - Calculates yearly savings

## Backend Architecture

### Technology Stack
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **python-dotenv** - Environment variable management
- **Anthropic Claude API** - AI image analysis (Claude 3.5 Sonnet)
- **requests** - HTTP client for external APIs

### Configuration

Environment variables (`.env`):
```
ANTHROPIC_API_KEY=your-key-here
GOOGLE_SHEETS_BASE_URL=optional-sheets-url
APP_VERSION=residential
APP_TIER=basic
ENABLE_DEV_MODE=true
ENABLE_PHOTO_ANALYSIS=true
```

### API Endpoints

#### GET /api/version
Returns current app version and capabilities.

**Response:**
```json
{
  "version": "residential",
  "tier": "basic",
  "articles": [110, 210, 240, ...],
  "articleCount": 11,
  "devMode": true,
  "features": { "code_lookup": true, ... },
  "featureList": ["code_lookup", "search", ...]
}
```

#### GET /api/nec-codes
Fetches NEC codes (tier-aware). Loads from Google Sheets if configured.

**Response:**
```json
{
  "codes": [...],
  "count": 50,
  "version": "residential",
  "tier": "basic",
  "articlesLoaded": [110, 210, ...],
  "articlesRequested": [...]
}
```

#### GET /api/nec-codes/search?q=query
Searches NEC codes with weighted relevance scoring.

**Scoring Weights:**
- code: 10
- title: 8
- description: 5
- application: 5
- commonViolations: 4
- category: 3
- safetyNotes: 3

#### GET /api/nec-codes/article/{article_num}
Returns codes for a specific NEC article.

#### POST /api/dev/submit-code
Submits NEC codes during field testing (dev mode only).

**Request Body:**
```json
{
  "code": "210.8(A)",
  "article": "210",
  "title": "GFCI Protection",
  "description": "...",
  "category": "optional",
  "application": "optional",
  "safetyNotes": "optional",
  "relatedCodes": "optional",
  "commonViolations": "optional",
  "photoTips": "optional"
}
```

#### POST /api/analyze
AI-powered photo analysis using Claude Vision.

**Request Body:**
```json
{
  "image": "base64-encoded-image-data",
  "problem": "optional-problem-title",
  "context": "optional-context"
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

#### GET /api/health
Health check endpoint returning status and version info.

## Data Models

### Electrical Problem

```javascript
{
  id: 'unique-id',
  title: 'Problem Title',
  description: 'Problem description',
  category: 'Category name',
  severity: 'critical|high|medium|low',
  commonality: 'most-common|common',
  causes: ['Cause 1', 'Cause 2'],
  troubleshootingSteps: ['Step 1', 'Step 2'],
  necReferences: [
    { code: '210.8(A)', title: 'Title', description: 'Description' }
  ],
  photoInstructions: ['Photo instruction 1', 'Photo instruction 2']
}
```

### NEC Code Entry

```javascript
{
  code: '210.8(A)',
  article: '210',
  title: 'GFCI Protection for Personnel',
  category: 'Branch Circuits',
  description: 'Full code text',
  application: 'Usage context',
  safetyNotes: 'Safety considerations',
  relatedCodes: ['210.8(B)', '406.4(D)'],
  commonViolations: 'Common mistakes',
  photoTips: 'Documentation guidance'
}
```

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.8+
- pnpm (recommended) or npm

### Installation

```bash
# Install frontend dependencies
pnpm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
```

### Running Development Servers

```bash
# Terminal 1: Backend
cd backend
python src/main.py

# Terminal 2: Frontend
pnpm run dev
```

### Build for Production

```bash
pnpm run build
```

Built files output to `dist/` directory.

## Security Considerations

- API keys stored in environment variables (not committed)
- `.gitignore` configured to exclude `.env` files
- All image analysis performed server-side
- CORS configured for development
- No authentication system yet (planned for future phases)

## Future Phases

### Phase 2: Commercial Wizard
- Google Sheets integration for NEC database
- Load calculation tools
- Three-phase system support
- Commercial equipment references

### Phase 3: Enterprise Wizard
- Team management
- Analytics dashboard
- Custom reports
- API access for integrations
- Priority support

## File Reference

| File | Lines | Purpose |
|------|-------|---------|
| `backend/src/main.py` | 481 | Flask API server |
| `src/App.jsx` | 765 | Main React application |
| `src/config/versions.js` | 197 | Tier configuration |
| `src/data/electricalProblems.js` | 474 | Problems database |
| `src/data/necCodes.js` | 643 | NEC code references |
