# Sample Mapbox on Flask
# author: Keita Watanabe

from flask import Flask, render_template, jsonify
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route('/')
def home():
    return render_template('index.html')

app.run(port=8000, debug=True)