# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/test')
def test():
    return "Dev Server is reachable"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
