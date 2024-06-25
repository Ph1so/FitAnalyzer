import requests
from dotenv import load_dotenv
import os

def configure():
    load_dotenv()

def get_exercises(muscle):
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': os.getenv('api_key')})
    if response.status_code == requests.codes.ok:
        print(response.text)
    else:
        print(f"Error: {response.status_code} - {response.text}")

def main():
    configure()
    get_exercises('biceps')


main()