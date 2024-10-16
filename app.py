# app.py
import os
from flask import Flask

app = Flask(__name__)

@app.route('/test')
def test():
    env = os.getenv('ENV')
    return f"CI/CD Test 1.0 : {env} server is reachable!"

if __name__ == '__main__':
    host = os.getenv('HOST')
    port = int(os.getenv('PORT'))
    app.run(host=host, port=port, debug=True)
