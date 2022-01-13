
from flask import Flask, render_template

app = Flask(__name__)

# Set up a home route
@app.route('/')
def home():
    values = [64,3,10,3]
    labels = ['Male','Female','Male Group','Female Group']
    labels2 = [1941,1945,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015,2020]
    dataMale = [64,64,14,16,63,32,27,37,47,34,35,22,33,39,42,49,67]
    dataFemale = [3,6,5,5,14,11,6,14,15,20,26,29,26,21,26,25,17]
    dataMaleG = [10,4,6,5,17,47,52,39,27,32,26,32,22,23,12,9,2]
    dataFemaleG = [3,1,0,3,2,3,1,2,0,2,6,7,5,1,0,1,1]
    dataMixed = [0,5,5,1,4,7,14,8,11,12,7,10,14,16,20,16,13]

    return render_template("index.html", labels=labels, values=values, labels2=labels2, dataMale=dataMale, dataFemale=dataFemale, dataMaleG=dataMaleG, dataFemaleG= dataFemaleG, dataMixed=dataMixed)



# Boilerplatex
if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
