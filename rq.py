import requests as rq
from bs4 import BeautifulSoup as Bu
for x in range(100):
    page =  rq.get("https://katmoviehd.si/?s=sex")
    page_element= Bu(page.content,"html.parser")
    print(page_element)


#https://katmoviehd.si/?s=sex