from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__, template_folder="../frontend/build", static_folder="../frontend/build/static") # remember to compile React app separately

# database config
"""
app.config[] = ""
db = PyMongo(app)
"""

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
@app.route('/profile', methods=['GET'])
def get_profile_info():
	user_id = request.user_id
	return profile.get_profile_info(user_id)

@app.route('/profile', methods=['POST'])
def set_profile_info():
	user_id = request.user_id
	user_data = request.user_data
	return profile.set_profile_info(user_id, user_data)

if __name__ == '__main__':
	app.run(debug = True)
