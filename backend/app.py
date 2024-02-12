from flask import Flask, jsonify, request
from flask_cors import CORS
import tempfile
import subprocess
from ultralytics import YOLO
import base64
import os
import shutil
app = Flask(__name__)
CORS(app)

spitting = YOLO("./model/spitting.pt", task="detect")
def get_single_image_name(directory_path):
    image_names = [file for file in os.listdir(directory_path) if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
    return image_names[0]

@app.route('/',methods=['GET'])
def  index() :
    return "Welcome to compex , The Backend is working"

@app.route('/start', methods=['POST'])
def start():
    data = request.get_json()
    data = data['token']
    subprocess.run(["python", "face.py", data])
    return {"status": "started"}

@app.route('/upload', methods=['POST'])
def spit_detection():
    if 'file' not in request.files:
        return jsonify({'status': 'error', 'message': 'No file provided'})

    file = request.files['file']
    print(file)
    if file and file.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp_file:
            file.save(temp_file.name)
        results = spitting.predict(source=temp_file.name, conf=0.4,save=True)
        os.remove(temp_file.name)
        image_path = get_single_image_name('./runs/detect/predict/')
        print(image_path)
        with open('./runs/detect/predict/'+image_path, "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
        result = {'status': 'success', 'result': 'Prediction Done', 'generatedImage': encoded_image}
        shutil.rmtree('./runs')
        return jsonify(result)
    else:
        return jsonify({'status': 'error', 'result': 'Invalid file format'})


if __name__ == '__main__':
    app.run(debug=True)