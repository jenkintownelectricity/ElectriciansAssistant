# Electrician's Assistant

Professional Electrical Safety & Code Reference Tool with AI-powered analysis

## Features

### 🛡️ Safety Database
- **30 Common Electrical Problems** with detailed troubleshooting
- Organized by severity: Critical, High, Medium, Low
- Step-by-step repair guidance
- NEC 2023 code references for each problem

### 📸 AI Photo Analysis
- Upload electrical panel/outlet photos
- AI-powered safety inspection
- Automatic code compliance checking
- Identifies hazards and violations

### 📚 NEC 2023 Code Database
- **170+ Essential NEC Codes** across 11 articles
- Articles covered:
  - Article 110 - General Requirements (17 codes)
  - Article 210 - Branch Circuits (23 codes)
  - Article 240 - Overcurrent Protection (13 codes)
  - Article 250 - Grounding & Bonding (19 codes)
  - Article 310 - Conductors (13 codes)
  - Article 314 - Boxes & Enclosures (12 codes)
  - Article 334 - NM Cable (10 codes)
  - Article 404 - Switches (11 codes)
  - Article 406 - Receptacles (15 codes)
  - Article 408 - Panelboards (12 codes)
  - Article 410 - Lighting (12 codes)
- Quick search functionality
- Related code cross-references

## Recent Updates (v1.5 - Residential Wizard Expansion)

### Content Additions
- ✅ Expanded from 13 to **30 electrical problems**
- ✅ Added 109 new NEC codes (60 → 170+)
- ✅ Complete coverage of residential electrical issues
- ✅ Enhanced code references with detailed descriptions

### New Problems Added
- Overloaded Electrical Panel
- Outdated Electrical Panel
- Missing GFCI Protection
- Improper Wire Splicing
- Loose Wire Connections
- Missing Junction Box Covers
- Insufficient Lighting Outlets
- Reversed Polarity
- Shared Neutral Circuits
- Missing Arc-Fault Protection
- Electrical Box Overfill
- Improper Grounding
- Aluminum Wiring Issues
- Incorrect Wire Gauge
- Backstabbed Outlets
- Federal Pacific Panels
- Doorbell Not Working

## AI Photo Analysis - Context-Aware Workflow

The AI Photo Analysis feature uses **context-aware analysis** to provide more accurate safety assessments based on the specific electrical problem you're experiencing.

### How It Works

1. **Select a Problem First**
   - Navigate to the Safety Database (30 problems available)
   - Choose the specific issue you're experiencing (e.g., "Circuit Breaker Keeps Tripping")
   
2. **Upload Photos**
   - The app provides specific photo instructions for your selected problem
   - Example: For circuit breakers, you'll be asked to photograph the panel interior, breaker labels, etc.
   
3. **Context-Aware AI Analysis**
   - The AI receives your photos PLUS the problem context
   - Backend API call includes:
```javascript
     {
       image: <base64_image_data>,
       problem: "Circuit Breaker Keeps Tripping",
       context: "Circuit breaker trips repeatedly when certain appliances are used"
     }
```
   - Claude AI analyzes photos specifically looking for issues related to your problem
   - Results are tailored to the selected electrical issue

4. **Get Detailed Results**
   - Issues detected specific to your problem
   - NEC code violations identified
   - Step-by-step remediation recommendations
   - Safety warnings prioritized by severity

### Why Context Matters

**Without Context:** AI might miss problem-specific issues or provide generic analysis

**With Context:** 
- For "Hot Outlet" → AI looks specifically for overload signs, loose connections, arcing
- For "GFCI Tripping" → AI checks for moisture, ground faults, worn insulation
- For "Flickering Lights" → AI examines connections, dimmer compatibility, voltage issues

### Technical Flow
```
User Journey:
Home Page → Safety Database → Select Problem → Photo Analysis View
                                    ↓
                          Problem Context Loaded
                                    ↓
                            Upload Photos (1-5)
                                    ↓
                         Frontend (React/Vite)
                                    ↓
            POST /api/analyze with {image, problem, context}
                                    ↓
                      Backend (Flask/Python)
                                    ↓
                        Claude AI API (Anthropic)
                                    ↓
            Context-Aware Analysis with NEC 2023 References
                                    ↓
                      Detailed Results Display
```

### API Endpoint

**POST** `/api/analyze`

**Request Body:**
```json
{
  "image": "data:image/jpeg;base64,...",
  "problem": "Circuit Breaker Keeps Tripping",
  "context": "Circuit breaker trips repeatedly when certain appliances are used or randomly"
}
```

**Response:**
```json
{
  "analysis": {
    "summary": "Analysis summary",
    "issues": [
      {
        "type": "critical",
        "title": "Overloaded Circuit",
        "description": "Circuit shows signs of excessive load",
        "location": "Panel breaker #5",
        "nec_reference": "210.20(A)"
      }
    ],
    "recommendations": [
      "Replace 15A breaker with 20A",
      "Verify wire gauge supports 20A load",
      "Add dedicated circuit for high-draw appliance"
    ]
  }
}
```

**This context-aware approach provides significantly more accurate and actionable results than generic photo analysis.**
## Tech Stack

**Frontend:**
- React + Vite
- TailwindCSS
- Shadcn/UI Components
- Lucide Icons

**Backend:**
- Python FastAPI
- Claude AI (Anthropic)
- NEC 2023 Database

## Installation
```bash
# Clone the repository
git clone https://github.com/jenkintownelectricity/ElectriciansAssistant.git

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Add your Anthropic API key to .env

# Run the application
# Terminal 1 - Backend
cd backend
python main.py

# Terminal 2 - Frontend
npm run dev
```

## Usage

1. **Browse Problems**: Click "Safety Database" to view all 30 common electrical issues
2. **AI Analysis**: Click "AI Photo Analysis" to upload and analyze electrical photos
3. **Search Codes**: Click "NEC 2023 Codes" to browse the code database
4. **Search**: Use the search bar to quickly find specific problems or codes

## Project Status

**Current Version:** v1.5 (Residential Wizard - 80% Complete)

**Completed:**
- ✅ Core application structure
- ✅ 30 electrical problems with full details
- ✅ 170+ NEC 2023 codes across 11 articles
- ✅ AI photo analysis integration
- ✅ Responsive UI with improved home page

**In Progress:**
- 🔄 Dedicated NEC codes browser view
- 🔄 Advanced search and filtering
- 🔄 Mobile optimization

**Planned:**
- 📋 Commercial tier expansion
- 📋 Inspection report generation
- 📋 PDF export functionality
- 📋 Offline mode support

## Contributing

This is a private project. For access or inquiries, contact Jenkintown Electricity.

## License

Proprietary - © 2025 Jenkintown Electricity

## Compliance

⚠️ **Important Notice:** This tool provides guidance for educational purposes. Always consult a licensed electrician for professional electrical work. All code references are based on NEC 2023 Edition.