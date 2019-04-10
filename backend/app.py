from flask import Flask, render_template,jsonify,request,json
from flask_pymongo import PyMongo
from pymongo import MongoClient
import bcrypt

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

client = MongoClient('localhost', 27017)
db = client['mydb']
collection = db['users']


# sign up
@app.route('/signup', methods=['POST'])
def signup():
    if(request.method == 'POST'):
        # store account information into database (create new user)
        # user email
        # user password

        #error checking
            print(json.loads(request.data))
            # loads the information into data
            data = json.loads(request.data)
            storedEmail = user.find_one({"email": data["email"]})
            user = mongo.db['user_info'] # loads user table
            account = {
                    "email" : data["email"]
                    "password" : sha256_crypt.encrypt(data["password"])
            }

            if(storedEmail is None):          #check if user's email already exists in the table, if not put the hash in 
                account_id = user.insert_one(account).inserted_id
            
            return jsonify({"statusCode":200})
    else:
        return jsonify({"statusCode":500})




# profile
if __name__ == '__main__':
	app.run(debug = True) 
