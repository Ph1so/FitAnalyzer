import requests
from dotenv import load_dotenv
import os

def configure():
    load_dotenv()

def get_exercises(name):
    # to change filter, chnage "name" in url, e.g. "muscle", "equipment", "difficulty", etc.
    api_url = 'https://api.api-ninjas.com/v1/exercises?name={}'.format(name)
    response = requests.get(api_url, headers={'X-Api-Key': os.getenv('api_key')})
    if response.status_code == requests.codes.ok:
        print(response.text)
    else:
        print("Error:", response.status_code, response.text)

def main():
    configure()
    get_exercises('incline hammer curls')

main()