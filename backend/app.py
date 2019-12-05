from flask import Flask,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from db.db_init import db
from db.models import Response, User, Token
from imports.db_functions import answer, create_user, login, logout
from functools import wraps
import json

app = Flask(__name__,static_folder="build")
app.config.from_pyfile('app.cfg')
db.init_app(app)

with app.app_context():
    db.create_all()

with open('questions.json') as json_file:
    questions = json.load(json_file)

def login_required(f):
    @wraps(f)
    def checkLogin(*args,**kwargs):
        print(request.headers)
        if request.headers.get("auth-token") is None:
            return jsonify(status = "fail", message = "auth-token not present in request header")
        provided = request.headers.get('auth-token')
        token_entry = Token.query.filter_by(value = provided).first()
        if token_entry is None:
            return jsonify(status = "fail", message = "auth-token invalid.")
        return f(token_entry.user_id,*args,**kwargs)
    return checkLogin  

@app.route('/en/', defaults={'path': ''})
@app.route('/en/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

@app.route("/api/response", methods=['POST'])
@login_required
def responseRoute(user_id):
    data = request.json
    print(data)
    if data.get("question_id") is None or data.get("answer") is None or not isinstance(data.get("question_id"),int):
        return jsonify(status = "fail", message = "Malformed request")
    question_id = data["question_id"]
    provided_answer = data["answer"]
    correct_answers = questions[question_id]["correct"]
    print(f"{question_id} | {json.dumps(correct_answers)}") 
    correct = False
    for ans in correct_answers:
        if ans == provided_answer:
            correct = True
    answer(user_id,question_id,provided_answer,correct)
    return jsonify(status = "success", correct = correct)

@app.route("/api/questions")
def getQuestion():
    data = json.loads(request.args.to_dict()['0'])
    if data is None or not isinstance(data,list):
        return jsonify(status = "fail", message = "Malformed request")
    to_return = []
    print(data)
    for id in data:
        if not isinstance(id,int):
            return jsonify(status = "fail", message = "Malformed request")
        text = questions[id].get("value")
        answers = questions[id].get("answers")
        question = {
            "value":text,
            "question_id":id,
            "answers":answers
        }
        to_return.append(question)
    return jsonify(status = "success", questions = to_return)

@app.route("/api/logout", methods=['POST'])
@login_required
def logoutRoute(user_id):
    token = request.headers["auth-token"]
    print(user_id)
    if logout(token):
        return jsonify(status = "success")
    return jsonify(status = "fail")

@app.route("/api/login", methods=['POST'])
def loginRoute():
    data = request.json
    if data.get("email") is None or data.get("password") is None:
        return jsonify(status = "fail", message = "Missing email or password")
    token = login(data["email"],data["password"])
    if(token == False):
        return jsonify(status = "fail", message = "Invalid email or password")
    return jsonify(status = "success", token=token)

@app.route("/api/register", methods=['POST'])
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
    responses = Response.query.all()
    mapped = list(map(lambda x: "email:%s | user_id:%s" % (x.email, x.user_id),data))
    mapped_tokens = list(map(lambda x: "user_id:%s | token: %s" % (x.user_id,x.value),tokens))
    mapped_responses = list(map(lambda x: "user_id:%s | question_id:%s | answer:%s | correct:%s" % (x.user_id,x.question_id,x.value,x.correct),responses))
    return jsonify(status = "success", users = mapped, tokens = mapped_tokens, responses = mapped_responses)



