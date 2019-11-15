import requests
import json

login = {"email":"stef@stef.com","password":"steven123"}


"""
print(requests.post('http://127.0.0.1:5000/register', json = login).json())
"""

headers = {"auth-token":"548e0447499d52ec6d299d2ea241e1dd5dc8f4ca10defa49441aac83a5649d985468916e137ed355964459347a3c4aadca2b3167f1c65fa8526ffde2da5ba124c17813b887584c1d6c9f5a7dac6731b70b1df5178ba3b033e47f5f407b4971df2354189a3a744f791bf1d4d707b6629f966a99983845ef5f5068f5bee630a36f"}
"""
questions = ["test",2,3]
data2 = requests.get('http://127.0.0.1:5000/questions',json = questions).json()
print(data2)
"""
print(requests.post('http://127.0.0.1:5000/response',json = {"question_id":3,"answer":3}, headers=headers).json())

print(requests.post('http://127.0.0.1:5000/logout',json = {}, headers=headers).json())
