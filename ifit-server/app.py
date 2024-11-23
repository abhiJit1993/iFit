from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS for your frontend origin
CORS(app, resources={r"/*": {"origins": "https://reimagined-tribble-pp67x7pj9q73rxg-3000.app.github.dev"}}, supports_credentials=True)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
