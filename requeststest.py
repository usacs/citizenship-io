import requests
import json

login = {"email":"stef@stef.com","password":"steven123"}
print(requests.post('http://127.0.0.1:5000/api/register', json = login).json())
token = requests.post('http://127.0.0.1:5000/api/login',json = login).json()["token"];
headers = {"auth-token":token}
print(requests.post('http://127.0.0.1:5000/api/response',json = {"question_id":"test","answer":3}, headers=headers).json())

print(requests.post('http://127.0.0.1:5000/api/logout',json = {}, headers=headers).json())
