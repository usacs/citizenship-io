from .db_init import db

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key = True)
    password = db.Column(db.LargeBinary, nullable=False)
    salt = db.Column(db.LargeBinary, nullable=False)
    email = db.Column(db.String(50), nullable=False)
    permission = db.Column(db.Integer, nullable=False)

class Token(db.Model):
    user_id = db.Column(db.Integer, primary_key = True)
    value = db.Column(db.String(128), nullable=False)
