import pymongo

# parameters: user id: int, country_of_origin: string
# takes properties passed by user_data and adds them/replaces document of that user
def set_profile_info(user_id, user_data):
    client = MongoClient()
    # connect to database

    db = client.citizenship_database
    users = db.user_info

    user_document = user_info.find_one({"user_id": user_id})
    for key in user_data:
        user_document[key] = user_data[key]
    return {"code": 200, "message": "User info saved successfully"}

def get_profile_info(user_id):
    client = MongoClient()
    # connect to database

    db = client.citizenship_database
    users = db.user_info

    user_document = user_info.find_one({"user_id": user_id})
    # add rest of information later
    return {"code": 200, "message": "Info attached", "info": user_document}
