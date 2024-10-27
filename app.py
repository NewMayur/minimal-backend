# app.py
import os
from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__, static_url_path='')
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all routes and origins
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/test', methods=['GET'])
def test():
    env = os.getenv('ENV', 'unknown')
    return jsonify(message=f"{env} server is reachable!")

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', 5000))
    app.run(host=host, port=port, debug=True)
