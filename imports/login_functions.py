import os
import hashlib

def generate_salt():
    return os.urandom(32)

def hash_pass(password,salt):
    return hashlib.pbkdf2_hmac("sha256",password.encode('utf-8'),salt,100000, dklen = 128)

def ver_pass_hash(stored, salt, provided):
    return hash_pass(provided,salt) == stored
