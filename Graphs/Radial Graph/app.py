import app;
import js2py
from flask import Flask, render_template, redirect

#app = flask.Flask(__name__, static_url_path='',
#            static_folder='static',
#            template_folder='templates')

# Maybe use instead
app = Flask(__name__)

@app.route('/')
def home():
    radial = js2py.run_file("radial_graph.js")
    return render_template("index.html", radial)

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
