from flask import Flask, render_template
from flask_pymongo import PyMongo
from pymongo import MongoClient

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
        if(request.form['submit'] == 'Enter'):
        # store account information into database (create new user)
        # user email
        # user login
        # user password
        #error checking
            account = {
                    "first_name": request.form['firstname'],
                    "last_name": request.form['lastname'],
                    "username": request.form['username'],
                    "password": request.form['password'],
                    "email": request.form['email']
            }
            accounts = db.accounts
            account_id = accounts.insert_one(account).inserted_id

    else:
        pass

    #Wait for the render_template from front end page
    return render_template('index.html', title="Sign Up")
            



# profile
if __name__ == '__main__':
	app.run(debug = True) 
