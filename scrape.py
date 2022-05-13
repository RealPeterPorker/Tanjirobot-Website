import requests
from bs4 import BeautifulSoup

page = requests.get("https://realpeterporker.github.io/Tanjirobot-Website/")
soup = BeautifulSoup(page.content, 'html.parser')
print(soup.prettify())
#print(list(soup.children))

