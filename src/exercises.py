import requests
from dotenv import load_dotenv
import os

# Load the API key from environment variables
load_dotenv()
#yash api key: VLZrd4JluETX99Ojr4h06w==AmFEACNadX8JYxQK
#os.getenv('api_key')
API_KEY = os.getenv('API_KEY', 'VLZrd4JluETX99Ojr4h06w==AmFEACNadX8JYxQK')

def configure():
    load_dotenv()

def get_exercises(muscle):
    api_url = f'https://api.api-ninjas.com/v1/exercises?muscle={muscle}'
    #response = requests.get(api_url, headers={'X-Api-Key': API_KEY})
    response = requests.get(api_url, headers={'X-Api-Key': os.getenv('api_key')})

    if response.status_code == requests.codes.ok:
        exercises = response.json()
        exercise_names = [exercise['name'] for exercise in exercises]
        return exercise_names
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return []

def fetch_all_exercises():
    muscleGroups = [
        'abdominals', 'abductors', 'adductors', 'biceps', 'calves',
        'chest', 'forearms', 'glutes', 'hamstrings', 'lats',
        'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'
    ]
    exercise_names = []
    for muscle in muscleGroups:
        exercise_names.extend(get_exercises(muscle))  # Use extend to add individual names
    return exercise_names

exerciseNames = fetch_all_exercises()
#exerciseNames = ["Push-up", "Squat", "Deadlift", "Bench Press"]
if __name__ == "__main__":
    print(exerciseNames)
    print(len(exerciseNames))