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

# sign up
@app.route('/signup', methods=['POST'])
def signup():
    if(request.method == 'POST'):
        print(json.loads(request.data))
        # store account information into database (create new user)
        user = mongo.db['users']
	
		# befoe adding into db, error check!!!!!

        account_id = user.insert_one(request.get_json()).inserted_id
        return jsonify({"statusCode" : 200})
    else:
        return jsonify({"statusCode" : 500})

    #Wait for the render_template from front end page
    #return render_template('index.html', title="Sign Up")
            



# profile
if __name__ == '__main__':
	app.run(debug = True) 
