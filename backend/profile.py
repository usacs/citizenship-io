import pymongo

# parameters: user id: int, country_of_origin: string
def set_profile_info(user_id, country_of_origin):
    client = MongoClient()
    # connect to database

    db = client.citizenship_database
    users = db.user_info

    user_document = user_info.find_one({"user_id": user_id})
    user_document['country_of_origin'] = country_of_origin
    # add more profile attributes later
    return {"code": 200, "message": "User info saved successfully"}

def get_profile_info(user_id):
    client = MongoClient()
    # connect to database

    db = client.citizenship_database
    users = db.user_info

    user_document = user_info.find_one({"user_id": user_id})
    # add rest of information later
    return {"code": 200, "message": "Info attached", "country_of_origin": user_document['country_of_origin']}
