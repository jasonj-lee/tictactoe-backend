from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=["POST"])
def get_prediction():
    data = request.get_json() 
    if not data:
        return jsonify({'error': 'No JSON data provided'}), 400
    
    game_state = data['game_state']
    # rowInd, colInd = model.predict(game_state)
    rowInd, colInd = 0, 0

    return jsonify({'message': 'Next move', 'rowInd': rowInd, 'colInd': colInd})

if __name__ == '__main__':
    app.run(debug=True, port=5000)