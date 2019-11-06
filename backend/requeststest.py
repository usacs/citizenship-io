import requests

login = {"email":"login3@test.com","password":"login3"}

print(requests.post('http://127.0.0.1:5000/register', json = login).json())
data = requests.post('http://127.0.0.1:5000/login', json = login).json()
print(data)
headers = {"auth-token":data["token"]}

print(requests.post('http://127.0.0.1:5000/logout',json = {}, headers=headers).json())
