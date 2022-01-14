from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager


def scrape_song():
    # browser = init_browser()
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    url = "https://www.billboard.com/charts/hot-100/"

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    song = soup.find("a", class_="c-title__link lrv-a-unstyle-link")
    song = song.text
    artist = soup.find("p", class_="c-tagline  a-font-primary-l a-font-primary-m@mobile-max lrv-u-color-black u-color-white@mobile-max lrv-u-margin-tb-00 lrv-u-padding-t-025 lrv-u-margin-r-150")
    artist = artist.text
    image_path = soup.find_all('img')[4]["src"]
    artist_img = url + image_path

    song_data = {
        "artist_img": artist_img,
        "artist": artist,
        "song": song
    }

    # Quit the browser
    browser.quit()

    return song_data