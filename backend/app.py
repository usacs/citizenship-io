from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__, template_folder="../frontend/build", static_folder="../frontend/build/static") # remember to compile React app separately

# database config

app.config['MONGO_URI'] = "mongodb://localhost:27017/citizenship-io"
db = PyMongo(app)

"""
@app.route("/", methods=['GET'])
def test():
	return 'Hello'
"""

@app.route('/', methods=['GET'])
def main():
	return render_template('index.html')

# login

# sign up

# profile
if __name__ == '__main__':
	app.run(debug = True) 
