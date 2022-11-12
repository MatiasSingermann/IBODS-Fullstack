from flask import Flask, render_template, jsonify
from flask import request
import json

noDetect = "No"

def seMandan(arr):
    AIsend = []
    for string in arr:
        if string == noDetect:
            continue
        AIsend.append(string)
    return AIsend


codigo_final = Flask(__name__)

@codigo_final.route('/')
def home():
    return render_template('index.html')
        
@codigo_final.route('/', methods=['POST'])
def procesador():
    print('msg recibido')
    #shared.volumen = int(request.json['volumen'])
    msg = [request.json['cruzar'], request.json['parar'], request.json['pozos'], request.json['cordonesdecalle'], request.json['sendaspeatonales'], request.json['automoviles'], request.json['motos'], request.json['bicicletas'], request.json['personas'], request.json['escalones']]
    mensaje1 = seMandan(msg)
    print(mensaje1)
    data = {
        "vol": request.json['volumen'],
        "mensaje": mensaje1
    }
    with open("./static/data.json", "w+") as outfile:
        json.dump(data, outfile, indent=4)
    return "mensaje recibido"
        #msg=request.args.get('msg')
        #msg=json.loads(msg)
    #objvol = procesador()
    #print(objvol)

if __name__ == '__main__':
    print("aaa")
    codigo_final.run(host='0.0.0.0', port=8000)


#print(mensaje)

