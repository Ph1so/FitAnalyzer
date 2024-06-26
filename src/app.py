from flask import Flask, jsonify
from flask_cors import CORS
import exercises

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS

@app.route('/exercise-names', methods=['GET'])
def get_exercise_names():
    return jsonify(exercises.exerciseNames)

if __name__ == '__main__':
    app.run(debug=True)