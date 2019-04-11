from flask import Flask,jsonify, render_template,request,json
from flask_pymongo import PyMongo
from pymongo import MongoClient

app = Flask(__name__, template_folder="../frontend/build", static_folder="../frontend/build/static") # remember to compile React app separately

# database config
app.config['MONGO_URI'] = "mongodb://localhost:27017/citizenship-io"
mongo = PyMongo(app)

"""
@app.route("/", methods=['GET'])
def test():
	return 'Hello'
"""

@app.route('/', methods=['GET'])
def main():
	return render_template('index.html')

# login
@app.route('/login', methods=['POST'])
def login():
    if(request.method == 'POST'):
        data = json.loads(request.data)
        print(data)
        # check database for this info
        user = mongo.db['users'] # load user collection  
        doc = user.find_one({"email": data["email"]})
        print(doc)
        if(doc is None): # user does not exist
            print("not working")
            return jsonify({"statusCode": 400})
        else: # user exists. success
            print("working!!!!")
            return jsonify({"statusCode": 200})
        
# sign up
@app.route('/signup', methods=['POST'])
def signup():
    if(request.method == 'POST'):
        print(json.loads(request.data))
        # store account information into database (create new user)
        user = mongo.db['users'] # load user table
	
		# before adding into db, error check!!!!!

        account_id = user.insert_one(request.get_json()).inserted_id
        return jsonify({"statusCode" : 200})
    else:
        return jsonify({"statusCode" : 500})

    #Wait for the render_template from front end page
    #return render_template('index.html', title="Sign Up")
            



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
