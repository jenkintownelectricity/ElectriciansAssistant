# Google Sheets NEC Code Database Setup

## Overview
This app can fetch NEC 2023 codes from Google Sheets, making it easy to manage and update the code database without modifying code files.

## Google Sheets Structure

### Create Your Spreadsheet

1. **Create a new Google Spreadsheet**
   - Name it: "NEC 2023 Code Database"

2. **Create separate sheets for each Article** (one per tab):
   - Article 110 - General Requirements
   - Article 200 - Grounded Conductors
   - Article 210 - Branch Circuits
   - Article 220 - Load Calculations
   - Article 250 - Grounding and Bonding
   - Article 300 - Wiring Methods
   - Article 310 - Conductors
   - Article 314 - Boxes
   - Article 334 - NM Cable
   - Article 404 - Switches
   - Article 406 - Receptacles
   - Article 408 - Panelboards
   - Article 410 - Luminaires
   - Article 422 - Appliances
   - Article 680 - Swimming Pools

### Column Structure (for each sheet)

Each sheet should have these columns in Row 1:

| Code | Title | Category | Description | Keywords | Related Codes |
|------|-------|----------|-------------|----------|---------------|

**Example rows:**

| Code | Title | Category | Description | Keywords | Related Codes |
|------|-------|----------|-------------|----------|---------------|
| 210.8 | Ground-Fault Circuit-Interrupter Protection | Branch Circuits | Ground-fault circuit-interrupter protection for personnel shall be provided as required... | GFCI, ground fault, bathroom, kitchen, outdoor | 210.8(A), 210.8(B), 406.4(D) |
| 210.8(A) | Dwelling Units - GFCI | Branch Circuits | All 125-volt receptacles in bathrooms, garages, outdoors... | dwelling, GFCI, bathroom, garage | 210.8, 210.52 |

### Publishing Your Sheet

1. **Click "File" → "Share" → "Publish to web"**
2. **Select the entire document** (or specific sheets)
3. **Choose "Comma-separated values (.csv)"** format
4. **Click "Publish"**
5. **Copy the published URL**

### Add URL to Environment Variables

Add the published Google Sheets URL to your `.env` file:

```
GOOGLE_SHEETS_NEC_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=SHEET_ID
```

**OR** if you want multiple sheets, create separate URLs for each article:

```
NEC_ARTICLE_110_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0
NEC_ARTICLE_210_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=1
NEC_ARTICLE_250_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=2
```

### Finding the gid (Sheet ID)

1. Open your Google Sheet
2. Click on the tab/sheet you want
3. Look at the URL - the `gid` parameter is the sheet ID
   - Example: `https://docs.google.com/spreadsheets/d/ABC123.../edit#gid=456789`
   - The `gid=456789` is your sheet ID

## Alternative: Use Google Sheets API

For more advanced features (editing, real-time updates), you can use the Google Sheets API:

1. Go to Google Cloud Console
2. Enable Google Sheets API
3. Create service account credentials
4. Share your sheet with the service account email
5. Download the credentials JSON file
6. Add to `.env`:
```
GOOGLE_SHEETS_CREDENTIALS_FILE=path/to/credentials.json
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
```

## Template Spreadsheet

You can copy this template:
[Link will be provided after you create it]

## Benefits

✅ Easy to update codes without touching code
✅ Multiple people can collaborate on the database
✅ Version history and change tracking
✅ Easy to organize by article/chapter
✅ Can add new codes instantly
✅ Can export/import from other formats
