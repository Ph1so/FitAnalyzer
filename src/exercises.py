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

def main():
    configure()
    #abdominals abductors adductors biceps calves chest forearms glutes hamstrings lats lower_back middle_back neck quadriceps traps triceps
    exercise_names_abdominals = get_exercises('abdominals')
    exercise_names_abductors = get_exercises('abductors')
    exercise_names_adductors = get_exercises('adductors')
    exercise_names_biceps = get_exercises('biceps')
    exercise_names_calves = get_exercises('calves')
    exercise_names_chest = get_exercises('chest')
    exercise_names_forearms = get_exercises('forearms')
    exercise_names_glutes = get_exercises('glutes')
    exercise_names_hamstrings = get_exercises('hamstrings')
    exercise_names_lats = get_exercises('lats')
    exercise_names_lower_back = get_exercises('lower_back')
    exercise_names_middle_back = get_exercises('middle_back')
    exercise_names_neck = get_exercises('neck')
    exercise_names_quadriceps = get_exercises('quadriceps')
    exercise_names_traps = get_exercises('traps')
    exercise_names_triceps = get_exercises('triceps')


    exercise_names = exercise_names_abdominals + exercise_names_abductors + exercise_names_adductors + exercise_names_biceps + exercise_names_calves + exercise_names_chest + exercise_names_forearms + exercise_names_glutes   + exercise_names_hamstrings + exercise_names_lats + exercise_names_lower_back + exercise_names_middle_back + exercise_names_neck + exercise_names_quadriceps + exercise_names_traps + exercise_names_triceps 

    print("Exercises:", exercise_names)

if __name__ == "__main__":
    main()