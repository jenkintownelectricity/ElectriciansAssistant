# ⚡ Electrician's Assistant

An AI-powered electrical safety inspection and code reference tool designed to help electricians identify problems, troubleshoot issues, and verify NEC 2023 compliance.

> **Created by [Armand Lefebvre](https://jenkintownelectricity.com)**
> Founder & Owner of Jenkintown Electricity
> 🚀 *Exciting news: More innovative tools coming soon!*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1-blue)
![Python](https://img.shields.io/badge/Python-3.14-green)
![Claude](https://img.shields.io/badge/Claude-3.5%20Sonnet-purple)
![Phase](https://img.shields.io/badge/Phase%201-Residential%20Wizard-yellow)

## 🏠 Phase 1: Residential Wizard

**Now Available**: Residential Wizard tier - $29/month or $199/year

This repository contains a **three-tier product system** designed to scale from residential to enterprise electrical work:

### 🎯 Product Tiers

| Tier | Target Market | Articles | Price | Status |
|------|--------------|----------|-------|--------|
| **Residential Wizard** | Residential electricians, small contractors | 11 articles (80% coverage) | $29/mo or $199/yr | ✅ Phase 1 - In Development |
| **Commercial Wizard** | Commercial electricians, contractors | 34 articles | $79/mo or $599/yr | 📋 Phase 2 - Planned |
| **Enterprise Wizard** | Large contractors, teams | All NEC 2023 | Custom pricing | 🔮 Phase 3 - Planned |

**Phase 1 Coverage**: Articles 110, 210, 240, 250, 310, 314, 334, 404, 406, 408, 410

See [`PHASE1_IMPLEMENTATION.md`](PHASE1_IMPLEMENTATION.md) for complete technical details.

## 🌟 Features

### 🔍 Smart Problem Diagnosis
- **Top 3 Most Common Problems**: Quick access to the most frequent electrical issues
- **Next 10 Common Problems**: Extended list of typical electrical problems
- **Full Problem Index**: Comprehensive database of electrical issues
- **Search Functionality**: Find specific problems quickly

### 📸 AI-Powered Photo Analysis
- Upload photos of electrical installations
- AI analysis using Claude 3.5 Sonnet
- Detailed safety inspection reports
- NEC 2023 code violation detection
- Critical issue identification

### 📚 NEC 2023 Code Database
- Pre-loaded National Electrical Code 2023 references
- 13+ common electrical problems with detailed NEC citations
- Troubleshooting steps for each problem
- Photo instructions for proper documentation
- Related code cross-references

### 🎯 Intelligent Workflow
1. **Start with common problems** - Most issues fall into known categories
2. **Follow troubleshooting steps** - Guided diagnosis process
3. **Take photos** - Specific photo instructions for each problem
4. **AI verification** - Upload photos for AI-powered safety analysis
5. **Get detailed reports** - Comprehensive safety ratings and recommendations

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.14 or compatible)
- **Anthropic API Key** (for Claude AI)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jenkintownelectricity/ElectriciansAssistant.git
   cd ElectriciansAssistant
   ```

2. **Install frontend dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend/` directory:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

   To get an Anthropic API key:
   - Visit https://console.anthropic.com/
   - Sign up or log in
   - Navigate to API Keys
   - Create a new key

### Running the Application

1. **Start the backend server** (from project root):
   ```bash
   cd backend
   python src/main.py
   ```
   Backend will run on `http://localhost:5000`

2. **Start the frontend** (from project root in a new terminal):
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
ElectriciansAssistant/
├── backend/
│   ├── src/
│   │   └── main.py              # Flask API server (481 lines)
│   ├── .env                     # Environment variables (not in git)
│   ├── .env.example             # Environment template
│   └── requirements.txt         # Python dependencies
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components (48 components)
│   │   ├── DevModeSubmission.jsx # NEC code submission form
│   │   └── UpgradePrompt.jsx    # Tier upgrade modal
│   ├── config/
│   │   └── versions.js          # Tiered product configuration
│   ├── data/
│   │   ├── electricalProblems.js # Problem database (13+ problems)
│   │   └── necCodes.js          # NEC 2023 code database
│   ├── hooks/
│   │   └── use-mobile.js        # Mobile breakpoint detection
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Tailwind CSS styles
│   └── main.jsx                 # React entry point
├── public/                      # Static assets
├── package.json                 # Node.js dependencies
├── pnpm-lock.yaml              # Package lock file (pnpm)
├── vite.config.js              # Vite build configuration
├── ARCHITECTURE.md             # Detailed architecture documentation
├── PHASE1_IMPLEMENTATION.md    # Phase 1 technical specifications
├── GOOGLE_SHEETS_SETUP.md      # Google Sheets integration guide
└── README.md                   # This file
```

> **See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed technical documentation including API endpoints, data models, and component architecture.**

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.1** - Styling
- **shadcn/ui** - Component library (Radix UI primitives)
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Anthropic Claude API** - AI-powered image analysis
- **python-dotenv** - Environment variable management

## 📖 Usage Guide

### Analyzing an Electrical Problem

1. **Choose Your Entry Point**:
   - Start with "Top 3 Most Common Problems" if you're unsure
   - Use "Next 10 Common Problems" for extended list
   - Browse "Full Problem Index" for complete catalog
   - Use search to find specific issues

2. **Select a Problem**:
   - Read the problem description
   - Review possible causes
   - Check NEC code references
   - Follow troubleshooting steps

3. **Take Photos**:
   - Follow the photo instructions provided
   - Capture multiple angles if needed
   - Ensure clear, well-lit images

4. **Upload for AI Analysis**:
   - Click "Upload Photos"
   - Select one or more images
   - Click "Analyze with AI"
   - Review the detailed safety report

### Understanding the Analysis Report

The AI provides:
- **Issues Found**: Critical, warning, or informational items
- **Issue Description**: Detailed explanation of each problem
- **Location**: Where in the image the issue was found
- **NEC Reference**: Relevant code sections
- **Recommendations**: Specific action items
- **Compliance Status**: Overall code compliance rating
- **Safety Rating**: Risk level assessment

## 🔐 Security Notes

- Never commit your `.env` file or API keys to git
- The `.gitignore` file is configured to exclude sensitive files
- API keys are loaded securely from environment variables
- All image analysis is done server-side

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add more electrical problems** to the database
2. **Expand NEC code references** with more articles
3. **Improve AI prompts** for better analysis accuracy
4. **Add new features** like report export, saving analysis history
5. **Fix bugs** and improve performance

### Google Sheets Integration (Coming Soon)

We're working on Google Sheets integration to make it easier to manage the NEC code database. See `GOOGLE_SHEETS_SETUP.md` for details.

## 📋 Common Electrical Problems Covered

1. Circuit Breaker Keeps Tripping
2. GFCI Outlet Keeps Tripping
3. Dead Outlet - No Power
4. Flickering Lights
5. Buzzing or Humming from Outlet/Switch
6. Hot Outlet or Switch Plate
7. Burning Smell from Outlet/Panel
8. Sparking Outlet
9. Two-Prong Outlets (Ungrounded)
10. Light Switch Not Working
11. Reversed Polarity
12. AFCI Breaker Nuisance Tripping
13. Aluminum Wiring Issues

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/version` | GET | Get current app version and capabilities |
| `/api/nec-codes` | GET | Fetch all NEC codes (tier-aware) |
| `/api/nec-codes/search?q=` | GET | Search codes with relevance scoring |
| `/api/nec-codes/article/{num}` | GET | Get codes for specific article |
| `/api/analyze` | POST | AI photo analysis with Claude Vision |
| `/api/dev/submit-code` | POST | Submit NEC codes (dev mode) |
| `/api/health` | GET | Health check |

> **See [ARCHITECTURE.md](ARCHITECTURE.md) for complete API documentation with request/response examples.**

## 🎯 Roadmap

### Phase 1 (Current) - Residential Wizard
- [x] Tiered product system architecture
- [x] AI-powered photo analysis with Claude 3.5 Sonnet
- [x] NEC 2023 code database (11 residential articles)
- [x] 13+ common electrical problems with troubleshooting
- [x] Dev mode for field testing code submissions
- [ ] Google Sheets integration for NEC database
- [ ] Payment integration

### Phase 2 - Commercial Wizard
- [ ] Load calculation tools
- [ ] Three-phase system support
- [ ] Commercial equipment references
- [ ] Expanded NEC coverage (34 articles)

### Phase 3 - Enterprise Wizard
- [ ] Team management
- [ ] Analytics dashboard
- [ ] Custom reports and PDF export
- [ ] API access for integrations
- [ ] Priority support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **National Fire Protection Association (NFPA)** - For the NEC standards
- **Anthropic** - For Claude AI technology
- **shadcn/ui** - For the beautiful component library
- **The electrician community** - For feedback and problem scenarios

## 📞 Support

For issues, questions, or suggestions:
- Contact: [BuildingSystemsAI_Administrator]
- Email: [support@buildingsystems.ai]
- Developed by: https://jenkintownelectricity.com

## ⚠️ Disclaimer

This tool is designed to assist licensed electricians and electrical inspectors. It is not a substitute for:
- Professional electrical training and certification
- Proper safety procedures and PPE
- Local electrical codes and regulations
- Professional judgment and experience

Always follow local electrical codes, safety procedures, and manufacturer instructions. When in doubt, consult with a licensed master electrician or electrical inspector.

---

**Built with ⚡ by electricians, for electricians**

🤖 *AI-powered with Claude Code*
