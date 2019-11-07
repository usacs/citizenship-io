import requests
import json

login = {"email":"login1@test.com","password":"login1"}

"""
print(requests.post('http://127.0.0.1:5000/register', json = login).json())
data = requests.post('http://127.0.0.1:5000/login', json = login).json()
print(data)
"""
token = "e3486f1251397ac2ffd3a5dfc1fa340760ca7ad8bfaff8bb168caae845906ebb5deb6e8c02836d20e48479a91b28c34a7f4a8600d8a26ba26aa95896d6c140a492a5f91641ec3b4ed93df773fff843b258fe8aa37817b1fad51e991738f4f660162ce8b580b631fe056c8f87ec80ac4b30551f98ad633d5edb1ba8ca28828836"
headers = {"auth-token":token}
"""
questions = ["test",2,3]
data2 = requests.get('http://127.0.0.1:5000/questions',json = questions).json()
print(data2)
"""
print(requests.post('http://127.0.0.1:5000/response',json = {"question_id":3,"answer":3}, headers=headers).json())
"""
print(requests.post('http://127.0.0.1:5000/logout',json = {}, headers=headers).json())
"""
