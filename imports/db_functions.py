import sys
sys.path.append("..")
from db.db_init import db
from db.models import User, Token, Response
from .login_functions import generate_salt, hash_pass, ver_pass_hash
import random
import secrets

"""

"""
def create_user(email,password):
    """
    Verify email isn't already in use.
    """
    if not User.query.filter_by(email=email).first() is None:
        return False
    
    """
    Basically a do while loop, keeps reassigning new_id until it finds one that doesn't have a user associated with it.
    Will most likely only run once, but might as well be safe.
    """
    condition = True
    new_id = 0
    while condition:
        new_id = random.randint(1,100000000)
        condition = (not User.query.filter_by(user_id=new_id).first() is None)
    
    """
    Create the SALT associated with the user, this value is required to verify the password upon login, and must be saved.
    """
    SALT = generate_salt()

    """
    This is the value that we need to save, never save the actual password!!
    """
    hash_val = hash_pass(password,SALT)
    
    """
    Actually saving the user to the db
    """
    user = User(user_id = new_id,password = hash_val,salt = SALT,email = email,permission = 0) 
    db.session.add(user)
    db.session.commit()
    return True

def answer(user_id,question_id,answer,correct):
    condition = True
    response_id = 0
    while condition:
        response_id = random.randint(1,100000000000)
        condition = (not Response.query.filter_by(response_id=response_id).first() is None)

    response_inst = Response(response_id = response_id, user_id = user_id,question_id = question_id,value = answer, correct = correct)
    db.session.add(response_inst)
    db.session.commit()
    return True

def logout(passed_token):
    token_instance = Token.query.filter_by(value = passed_token).first()
    if token_instance is None:
        return False
    db.session.delete(token_instance)
    db.session.commit()
    return True

def login(email,password):
    user = User.query.filter_by(email = email).first()
    if user is None:
        return False
    if(ver_pass_hash(user.password,user.salt,password)):
        saved_token = Token.query.filter_by(user_id = user.user_id).first()
        token_val = secrets.token_hex(128)
        if saved_token is not None:
            saved_token.value = token_val
            db.session.commit()
        else:
            token = Token(user_id = user.user_id,value = token_val)
            db.session.add(token)
            db.session.commit()
        return token_val
    return False

