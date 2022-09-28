import pygame
from time import sleep
import alsaaudio

from picamera import PiCamera
from time import sleep

import os
import threading

import serial

#import VL53L0X



from flask import Flask, render_template, jsonify



pygame.mixer.init()
v = alsaaudio.Mixer()
vol_act = 50

#ser = serial.Serial("/dev/ttyUSB0", 9600)
#ser.flushInput()
def lectura():
    while True:
        leer = ser.readline()
        leer = leer_.strip()
        print(leer.decode("utf-8"))
        if (leer.decode("utf-8") == "<Arduino is ready>"):
            print("enviando")
            res = ans.encode("utf-8")
            ser.write(res)
        #tengo que leer lo que me manda singer acá, 

def cam_():
        camara = PiCamera()
        camara.shutter_speed = 500000

        camara.capture('//dev/shm/imagen_final.jpg') #saco una foto y la guardo en esa carpeta
        
 
procesado = False #variable que cambia a True cuando la IA procesa la imagen y así puedo borrar la imagen previa antes de sacar una nueva
n_arch = "y2mate.com - MARCHA PERONISTA"
def audios():
        #pygame.mixer.music.load("/home/ibods/Downloads/y2mate.com - MARCHA PERONISTA.mp3")
        pygame.mixer.music.load("/home/ibods/Music/" + n_arch + ".mp3")
        pygame.mixer.music.play()
        v.setvolume(vol_act)
        while pygame.mixer.music.get_busy() == True:
            continue

def borrar ():
    sleep(10)
    os.remove('//dev/shm/imagen_final.jpg')
    

def sence_dis():
        # Create a VL53L0X object
    tof = VL53L0X.VL53L0X()

    # Start ranging
    tof.start_ranging(VL53L0X.VL53L0X_BETTER_ACCURACY_MODE)

    timing = tof.get_timing()
    if (timing < 20000):
        timing = 20000
    print ("Timing %d ms" % (timing/1000))

    for count in range(1,101):
        distance = tof.get_distance()
        if (distance > 0):
            print ("%d mm, %d cm, %d" % (distance, (distance/10), count))

        time.sleep(timing/1000000.00)

    tof.stop_ranging()
    
def pagina():
    
    codigo_final = Flask(__name__)

    @codigo_final.route('/')
    def home():
        return render_template('index.html')

    if __name__ == '__main__':
        codigo_final.run(host='0.0.0.0', port=8000)
    

if __name__ == "__main__":
    cam__ = threading.Thread(target=cam_, args=())
    audio_ = threading.Thread(target=audios, args=())
    pagina_ = threading.Thread(target=pagina, args=())

cam__.start()
audio_.start()
pagina_.start()

#_thread.start_new_thread(cam_, ())

#_thread.start_new_thread(audios, ())

#_thread.start_new_thread(app.func1, ())

#_thread.start_new_thread(pagina, ())



if procesado == True:
   # _thread.start_new_thread(borrar, ())
    procesado = False
