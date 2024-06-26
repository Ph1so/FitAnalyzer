from flask import Flask, jsonify
from flask_cors import CORS
from exercises import getNames

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/names', methods=['GET'])
def get_names():
    names = getNames()
    return jsonify(names)

if __name__ == '__main__':
    app.run(debug=True, port = 5001)
