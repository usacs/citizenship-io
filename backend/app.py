from flask import Flask,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from db.db_init import db
from db.models import User, Token
from imports.db_functions import create_user, login, logout
from functools import wraps

app = Flask(__name__)
app.config.from_pyfile('app.cfg')
db.init_app(app)

with app.app_context():
    db.create_all()

def login_required(f):
    @wraps(f)
    def checkLogin(*args,**kwargs):
        if request.headers.get("auth-token") is None:
            return jsonify(status = "fail", message = "Auth-token not present in request header")
        return f(*args,**kwargs)
    return checkLogin  

@app.route("/logout", methods=['POST'])
@login_required
def logoutRoute():
    token = request.headers["auth-token"]
    if logout(token):
        return jsonify(status = "success")
    return jsonify(status = "fail")

@app.route("/login", methods=['POST'])
def loginRoute():
    data = request.json
    if data.get("email") is None or data.get("password") is None:
        return jsonify(status = "fail", message = "Missing email or password")
    token = login(data["email"],data["password"])
    if(token == False):
        return jsonify(status = "fail", message = "Invalid email or password")
    return jsonify(status = "success", token=token)

@app.route("/register", methods=['POST'])
def register():
    data = request.json
    if data.get("email") is None or data.get("password") is None:
        return jsonify(status = "fail", message = "Missing email or password")
    if "@" not in data["email"] or len(data["email"]) > 50:
        return jsonify(status = "fail", message = "Invalid email")
    if create_user(data["email"], data["password"]):
        return jsonify(status = "success", message = "Created")
    else:
        return jsonify(status = "fail", message = "Email already in use")

"""
DEBUGGING ROUTE
"""

@app.route("/users")
def users():
    data = User.query.all()
    tokens = Token.query.all()
    mapped = list(map(lambda x: "email:%s | user_id:%s" % (x.email, x.user_id),data))
    mapped_tokens = list(map(lambda x: "user_id:%s | token: %s" % (x.user_id,x.value),tokens))
    return jsonify(status = "success", users = mapped, tokens = mapped_tokens)

@app.route("/")
def index():
    create_user("test@test.com","password123")
    return app.send_static_file("html/index.html")


