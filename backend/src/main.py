from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import base64
import os
import requests
import csv
import json
import re
from io import StringIO
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables from .env file
load_dotenv(os.path.join(os.path.dirname(__file__), '../.env'))

app = Flask(__name__, static_folder="../../dist", static_url_path="/")
CORS(app)

# Configuration
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GOOGLE_SHEETS_BASE_URL = os.getenv("GOOGLE_SHEETS_BASE_URL", "")
APP_VERSION = os.getenv("APP_VERSION", "residential")
APP_TIER = os.getenv("APP_TIER", "basic")
ENABLE_DEV_MODE = os.getenv("ENABLE_DEV_MODE", "true").lower() == "true"
ENABLE_PHOTO_ANALYSIS = os.getenv("ENABLE_PHOTO_ANALYSIS", "true").lower() == "true"

# Version-specific article lists (Phase 1: Residential Wizard)
VERSION_ARTICLES = {
    "residential": [110, 210, 240, 250, 310, 314, 334, 404, 406, 408, 410],
    "commercial": [
        110, 210, 220, 225, 230, 240, 250, 300, 310, 314, 320, 330,
        334, 338, 340, 344, 348, 350, 352, 358, 400, 404, 406, 408,
        410, 422, 424, 430, 440, 450, 511, 625, 680, 690
    ],
    "enterprise": "ALL"  # Load all articles
}

# Version features
VERSION_FEATURES = {
    "residential": ["code_lookup", "search", "photo_analysis", "basic_troubleshooting", "dev_mode"],
    "commercial": ["code_lookup", "search", "photo_analysis", "basic_troubleshooting",
                   "load_calculations", "three_phase_support", "commercial_equipment", "dev_mode"],
    "enterprise": ["code_lookup", "search", "photo_analysis", "basic_troubleshooting",
                   "load_calculations", "three_phase_support", "commercial_equipment",
                   "team_management", "analytics_dashboard", "custom_reports", "api_access",
                   "priority_support", "dev_mode"]
}

def get_articles_for_version():
    """Get list of articles to load based on app version"""
    return VERSION_ARTICLES.get(APP_VERSION, VERSION_ARTICLES["residential"])

def get_features_for_version():
    """Get list of features available for current version"""
    return VERSION_FEATURES.get(APP_VERSION, VERSION_FEATURES["residential"])

def has_feature(feature_name):
    """Check if feature is available in current version"""
    return feature_name in get_features_for_version()

@app.route("/api/version", methods=["GET"])
def get_version_info():
    """Return current app version and capabilities"""
    articles = get_articles_for_version()
    features = get_features_for_version()

    return jsonify({
        "version": APP_VERSION,
        "tier": APP_TIER,
        "articles": articles if articles != "ALL" else "all",
        "articleCount": len(articles) if articles != "ALL" else "all",
        "devMode": ENABLE_DEV_MODE,
        "features": {feature: True for feature in features},
        "featureList": features
    })

@app.route("/api/nec-codes", methods=["GET"])
def get_nec_codes():
    """
    Fetch NEC codes from Google Sheets - version aware
    Only loads articles allowed for current version/tier
    """
    if not GOOGLE_SHEETS_BASE_URL:
        # Fallback to built-in codes if Google Sheets not configured
        return jsonify({
            "codes": [],
            "count": 0,
            "version": APP_VERSION,
            "articlesLoaded": [],
            "message": "Google Sheets not configured. Configure GOOGLE_SHEETS_BASE_URL in .env"
        })

    try:
        articles_to_load = get_articles_for_version()
        all_codes = []
        loaded_articles = []

        # Determine which articles to load
        articles_list = articles_to_load if articles_to_load != "ALL" else range(100, 900, 10)

        # Load each article tab from Google Sheets
        for article_num in articles_list:
            # Construct sheet URL for specific article tab
            sheet_url = f"{GOOGLE_SHEETS_BASE_URL}/gviz/tq?tqx=out:csv&sheet=Article_{article_num}"

            try:
                response = requests.get(sheet_url, timeout=5)
                if response.status_code == 200:
                    csv_data = csv.DictReader(StringIO(response.text))

                    article_codes = []
                    for row in csv_data:
                        code_entry = {
                            "code": row.get("Code", ""),
                            "article": row.get("Article", str(article_num)),
                            "title": row.get("Title", ""),
                            "category": row.get("Category", ""),
                            "description": row.get("Description", ""),
                            "application": row.get("Application", ""),
                            "safetyNotes": row.get("Safety_Notes", ""),
                            "relatedCodes": row.get("Related_Codes", "").split(", ") if row.get("Related_Codes") else [],
                            "commonViolations": row.get("Common_Violations", ""),
                            "photoTips": row.get("Photo_Tips", "")
                        }
                        article_codes.append(code_entry)

                    if article_codes:  # Only add if we got valid data
                        all_codes.extend(article_codes)
                        loaded_articles.append(article_num)

            except Exception as e:
                # Skip articles that don't exist yet or have errors
                print(f"Could not load Article {article_num}: {str(e)}")
                continue

        return jsonify({
            "codes": all_codes,
            "count": len(all_codes),
            "version": APP_VERSION,
            "tier": APP_TIER,
            "articlesLoaded": loaded_articles,
            "articlesRequested": articles_list if isinstance(articles_list, list) else "all"
        })

    except Exception as e:
        print(f"Error loading codes: {str(e)}")
        return jsonify({"error": str(e), "codes": [], "count": 0}), 500

@app.route("/api/nec-codes/search", methods=["GET"])
def search_nec_codes():
    """Search NEC codes by keyword - version aware"""
    try:
        query = request.args.get("q", "").lower()
        if not query:
            return jsonify({"error": "Search query required"}), 400

        # Get all codes for current version
        codes_response = get_nec_codes()
        codes_data = codes_response[0].get_json() if hasattr(codes_response[0], 'get_json') else codes_response.get_json()

        if "error" in codes_data:
            return jsonify(codes_data), 500

        all_codes = codes_data["codes"]

        # Search across multiple fields with scoring
        results = []
        for code in all_codes:
            score = 0
            searchable_fields = {
                "code": 10,  # Highest priority
                "title": 8,
                "description": 5,
                "application": 5,
                "category": 3,
                "commonViolations": 4,
                "safetyNotes": 3
            }

            for field, weight in searchable_fields.items():
                field_value = str(code.get(field, "")).lower()
                if query in field_value:
                    score += weight
                    if field_value.startswith(query):
                        score += 2  # Bonus for prefix match

            if score > 0:
                results.append({
                    **code,
                    "searchScore": score
                })

        # Sort by relevance score
        results.sort(key=lambda x: x["searchScore"], reverse=True)

        return jsonify({
            "results": results,
            "count": len(results),
            "query": query,
            "version": APP_VERSION,
            "tier": APP_TIER
        })

    except Exception as e:
        print(f"Search error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/api/nec-codes/article/<int:article_num>", methods=["GET"])
def get_article_codes(article_num):
    """Get all codes for a specific article"""
    # Check if article is available in current version
    articles_allowed = get_articles_for_version()
    if articles_allowed != "ALL" and article_num not in articles_allowed:
        return jsonify({
            "error": "Article not available in current version",
            "article": article_num,
            "availableIn": "commercial" if article_num in VERSION_ARTICLES["commercial"] else "enterprise",
            "currentVersion": APP_VERSION
        }), 403

    try:
        # Get all codes and filter by article
        codes_response = get_nec_codes()
        codes_data = codes_response[0].get_json() if hasattr(codes_response[0], 'get_json') else codes_response.get_json()

        all_codes = codes_data.get("codes", [])
        article_codes = [code for code in all_codes if int(code.get("article", 0)) == article_num]

        return jsonify({
            "article": article_num,
            "codes": article_codes,
            "count": len(article_codes),
            "version": APP_VERSION
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/dev/submit-code", methods=["POST"])
def submit_dev_code():
    """
    On-the-fly code submission during development/testing
    Stores submission in Dev_Submissions tab for review
    Phase 1: Logs to console and returns success
    Phase 2: Will write to Google Sheets Dev_Submissions tab
    """
    if not ENABLE_DEV_MODE:
        return jsonify({"error": "Development mode not enabled"}), 403

    if not has_feature("dev_mode"):
        return jsonify({"error": "Dev mode not available in current version"}), 403

    try:
        data = request.json

        # Validate required fields
        required_fields = ["code", "article", "title", "description"]
        missing_fields = [field for field in required_fields if field not in data]

        if missing_fields:
            return jsonify({
                "error": f"Missing required fields: {', '.join(missing_fields)}"
            }), 400

        # Add metadata
        submission = {
            **data,
            "submitted_at": datetime.now().isoformat(),
            "version": APP_VERSION,
            "tier": APP_TIER,
            "status": "pending_review"
        }

        # TODO Phase 2: Add code to append to Google Sheets Dev_Submissions tab
        # For Phase 1, log and return success
        print(f"\n{'='*60}")
        print(f"DEV CODE SUBMISSION - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*60}")
        print(f"Code: {data.get('code')}")
        print(f"Article: {data.get('article')}")
        print(f"Title: {data.get('title')}")
        print(f"Category: {data.get('category', 'N/A')}")
        print(f"Description: {data.get('description')[:100]}...")
        print(f"{'='*60}\n")

        return jsonify({
            "success": True,
            "message": "Code submitted successfully for review",
            "submission": submission
        })

    except Exception as e:
        print(f"Dev submission error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/api/analyze", methods=["POST"])
def analyze_image():
    """AI-powered photo analysis using Claude - Phase 1: Residential Wizard"""
    if not ENABLE_PHOTO_ANALYSIS:
        return jsonify({"error": "Photo analysis not enabled"}), 403

    if not has_feature("photo_analysis"):
        return jsonify({"error": "Photo analysis not available in current version"}), 403

    try:
        data = request.get_json()
        image_data = data.get("image")
        problem_context = data.get("problem", "")

        if not image_data:
            return jsonify({"error": "No image provided"}), 400

        # Remove the data URL prefix if present
        if "," in image_data:
            image_data = image_data.split(",")[1]

        # Enhanced prompt for Phase 1: Residential Wizard
        articles_context = get_articles_for_version()
        articles_text = ", ".join(map(str, articles_context)) if articles_context != "ALL" else "all NEC 2023 articles"

        prompt = f"""You are an expert residential electrician and electrical safety inspector with deep knowledge of the National Electrical Code (NEC) 2023 edition.

**Current Focus**: Residential Wizard - Articles {articles_text}

**Context**: {problem_context if problem_context else 'General residential electrical installation inspection'}

Analyze this image carefully for residential electrical code compliance. Look for:
1. Burnt or damaged components (wires, outlets, breakers, fixtures)
2. Loose or improper connections
3. Code violations according to NEC 2023 standards
4. Safety hazards
5. Signs of overheating, arcing, or corrosion
6. Missing labels or improper installation
7. Specific residential violations (GFCI, AFCI, grounding, branch circuits)

Provide your response in the following JSON format:
{{
  "issues": [
    {{
      "type": "critical|warning|info",
      "title": "Brief issue title",
      "description": "Detailed description of the issue",
      "location": "Where in the image this issue is located",
      "nec_reference": "Relevant NEC article or section (e.g., 210.8(A))",
      "riskLevel": "immediate|high|medium|low",
      "recommendation": "Specific fix or action required"
    }}
  ],
  "recommendations": [
    "Specific action item 1",
    "Specific action item 2"
  ],
  "compliance_status": "Compliant|Non-Compliant|Needs Review",
  "safety_rating": "Low Risk|Moderate Risk|High Risk|Critical",
  "summary": "Brief overall assessment"
}}

Be thorough and specific. Focus on residential code requirements. If you see critical safety issues, mark them as "critical" type with "immediate" or "high" risk level. If the image quality is poor, mention that in your response."""

        # Determine image media type
        media_type = "image/jpeg"
        if image_data.startswith("/9j/"):
            media_type = "image/jpeg"
        elif image_data.startswith("iVBORw"):
            media_type = "image/png"
        elif image_data.startswith("R0lGOD"):
            media_type = "image/gif"
        elif image_data.startswith("UklGR"):
            media_type = "image/webp"

        # Call Anthropic Claude Vision API
        headers = {
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }

        payload = {
            "model": "claude-3-5-sonnet-20241022",
            "max_tokens": 2000,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": media_type,
                                "data": image_data
                            }
                        },
                        {
                            "type": "text",
                            "text": prompt
                        }
                    ]
                }
            ]
        }

        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=payload,
            timeout=60
        )

        if not response.ok:
            error_detail = response.text
            print(f"Claude API Error Status: {response.status_code}")
            print(f"Claude API Error Detail: {error_detail}")
            raise Exception(f"Claude API error ({response.status_code}): {error_detail}")

        # Extract the analysis result
        response_data = response.json()
        analysis_text = response_data["content"][0]["text"]

        # Parse JSON response - extract JSON from text that might have extra content
        json_match = re.search(r'\{.*\}', analysis_text, re.DOTALL)
        if json_match:
            json_str = json_match.group(0)
            analysis_result = json.loads(json_str)
        else:
            analysis_result = json.loads(analysis_text)

        # Add metadata
        analysis_result["version"] = APP_VERSION
        analysis_result["tier"] = APP_TIER
        analysis_result["analyzed_at"] = datetime.now().isoformat()

        return jsonify(analysis_result)

    except Exception as e:
        import traceback
        print(f"Analysis Error: {str(e)}")
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "version": APP_VERSION,
        "tier": APP_TIER,
        "features": get_features_for_version(),
        "devMode": ENABLE_DEV_MODE
    })

@app.route("/")
def serve_index():
    """Serve frontend index.html"""
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors by serving index.html (for SPA routing)"""
    return app.send_static_file("index.html")

if __name__ == "__main__":
    print(f"\n{'='*60}")
    print(f"Electrician's Assistant - Phase 1: Residential Wizard")
    print(f"{'='*60}")
    print(f"Version: {APP_VERSION}")
    print(f"Tier: {APP_TIER}")
    print(f"Dev Mode: {'Enabled' if ENABLE_DEV_MODE else 'Disabled'}")
    print(f"Photo Analysis: {'Enabled' if ENABLE_PHOTO_ANALYSIS else 'Disabled'}")
    print(f"Articles: {get_articles_for_version()}")
    print(f"Features: {', '.join(get_features_for_version())}")
    print(f"{'='*60}\n")

    app.run(host="0.0.0.0", port=5000, debug=True)
