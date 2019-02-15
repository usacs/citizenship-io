import axios from 'axios'

/**
Paramters: user_info: {user_id: ###, additional_data: ...}
Returns: res: {code: ###, message: "Code information}
*/
export const set_profile_info = user_info => {
  if (user_info.country_of_origin == null || user_info.user_id == null) {
    return {"code": -1, "message": "Data required missing from parameter"}
  }
  return axios
  .post('/profile', {
    user_id: user_info.user_id
    country_of_origin: user_info.country_of_origin,
  })
  .then(res => {
    console.log(res)
  })
}

/**
Paramters: user_info: {user_id: ###}
Returns: res: {code: ###, message: "Code information", country_of_origin: "country"}
*/
export const get_profile_info = user_info => {
  if (user_info.country_of_origin == null || user_info.user_id == null) {
    return {"code": -1, "message": "Data required missing from parameter"}
  }
  return axios
  .get('/profile', {
    user_id: user_info.user_id
  })
  .then(res => {
    console.log(res)
  })
}
