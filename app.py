# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/test')
def test():
    return "Server is reachable"

if __name__ == '__main__':
    app.run(debug=True)
