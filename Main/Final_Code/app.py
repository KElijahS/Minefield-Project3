from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from webdriver_manager.chrome import ChromeDriverManager
import urllib3
import selenium
import scrape

app = Flask(__name__)

data_mongo = PyMongo(app, uri="mongodb://localhost:27017/billboard_data")
mongo = PyMongo(app, uri="mongodb://localhost:27017/top_artist")

# Set up a home route
@app.route('/')
def home():
    values = [64,3,10,3,0]
    values2 = [67,17,2,1,13]
    labels = ['Male','Female','Male Group','Female Group','Mixed Group']
    labels2 = [1941,1945,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015,2020]
    dataMale = [80,80,46.6,53.3,63,32,27,37,47,34,35,22,33,39,42,49,67]
    dataFemale = [3.75,7.5,16.7,16.7,14,11,6,14,15,20,26,29,26,21,26,25,17]
    dataMaleG = [12.5,5,20,16.7,17,47,52,39,27,32,26,32,22,23,12,9,2]
    dataFemaleG = [3.75,1.25,0,10,2,3,1,2,0,2,6,7,5,1,0,1,1]
    dataMixed = [0,6.25,16.7,3.3,4,7,14,8,11,12,7,10,14,16,20,16,13]

    topArtist_data = mongo.db.collection.find_one()

    return render_template("index.html", labels=labels, values=values, labels2=labels2, dataMale=dataMale, dataFemale=dataFemale, dataMaleG=dataMaleG, dataFemaleG= dataFemaleG, dataMixed=dataMixed, values2=values2, topArtist=topArtist_data)

@app.route("/scrape")
def scraper():

    # Run the scrape function
    song_data = scrape.scrape_song()

    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update({}, song_data, upsert=True)

    # redirect back to the home page
    return redirect("/")

# Boilerplatex
if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
