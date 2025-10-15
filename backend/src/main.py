from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import base64
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv(os.path.join(os.path.dirname(__file__), '../.env'))

app = Flask(__name__, static_folder="../../dist", static_url_path="/")
CORS(app)

# Get API key
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

@app.route("/api/analyze", methods=["POST"])
def analyze_image():
    try:
        data = request.get_json()
        image_data = data.get("image")
        
        if not image_data:
            return jsonify({"error": "No image provided"}), 400
        
        # Remove the data URL prefix if present
        if "," in image_data:
            image_data = image_data.split(",")[1]
        
        # Prepare the prompt for electrical inspection
        prompt = """You are an expert electrician and electrical safety inspector with deep knowledge of the National Electrical Code (NEC) 2023 edition.

Analyze this electrical image carefully and provide a detailed inspection report. Look for:
1. Burnt or damaged components (busbars, wires, outlets, breakers)
2. Loose or improper connections
3. Code violations according to NEC standards
4. Safety hazards
5. Signs of overheating, arcing, or corrosion
6. Missing labels or improper installation

Provide your response in the following JSON format:
{
  "issues": [
    {
      "type": "critical|warning|info",
      "title": "Brief issue title",
      "description": "Detailed description of the issue",
      "location": "Where in the image this issue is located",
      "nec_reference": "Relevant NEC article or section"
    }
  ],
  "recommendations": [
    "Specific action item 1",
    "Specific action item 2"
  ],
  "compliance_status": "Compliant|Non-Compliant|Needs Review",
  "safety_rating": "Low Risk|Moderate Risk|High Risk|Critical"
}

Be thorough and specific. If you see critical safety issues, mark them as "critical" type. If the image quality is poor or you cannot see electrical components clearly, mention that in your response."""

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

        # Call Anthropic Claude Vision API via HTTP
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

        # Parse the JSON response - extract JSON from text that might have extra content
        import json
        import re

        # Try to find JSON object in the response
        # Look for content between first { and last }
        json_match = re.search(r'\{.*\}', analysis_text, re.DOTALL)
        if json_match:
            json_str = json_match.group(0)
            analysis_result = json.loads(json_str)
        else:
            # If no JSON found, try parsing the whole thing
            analysis_result = json.loads(analysis_text)
        
        return jsonify(analysis_result)
    
    except Exception as e:
        import traceback
        print(f"Error: {str(e)}")
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"}) 


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)



@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")

