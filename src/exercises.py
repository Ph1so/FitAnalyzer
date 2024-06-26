import requests
from dotenv import load_dotenv
import os

#yash api key: VLZrd4JluETX99Ojr4h06w==AmFEACNadX8JYxQK
#os.getenv('api_key')

def configure():
    load_dotenv()

def get_exercises(muscle):
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': os.getenv('api_key')})

    if response.status_code == requests.codes.ok:
        exercises = response.json()
        exercise_names = [exercise['name'] for exercise in exercises]
        return exercise_names
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return []

def getNames():
    configure()
    muscleGroups = [
        'abdominals', 'abductors', 'adductors', 'biceps', 'calves', 
        'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 
        'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'
    ]
    exerciseNames = []
    for muscle in muscleGroups:
        exerciseNames.extend(get_exercises(muscle))  # Use extend to add individual names

    return exerciseNames

def main():
    configure()
    

if __name__ == "__main__":
    main()