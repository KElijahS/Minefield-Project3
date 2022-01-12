
from flask import Flask, render_template

app = Flask(__name__)

# Set up a home route
@app.route('/')
def home():
    values = [64,3,10,3]
    labels = ['Male','Female','Male Group','Female Group']
    return render_template("index.html", labels=labels, values=values)

# Boilerplatex
if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
