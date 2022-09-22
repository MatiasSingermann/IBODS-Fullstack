from flask import Flask, render-template, jsonify

Codigo_final = Flask(__name__)

@server.route("/")
def web():
    return render_template('index.html')

if __name__ == '__main__':
    server.run()