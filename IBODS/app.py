from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def procesador(msg):
    mensaje = json.loads(msg)
    print('msg recibido')
    print(f"VOLUMEN: {msg['volumen']}")
    print(f"OBJETOS: {msg['objetos']}")



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)