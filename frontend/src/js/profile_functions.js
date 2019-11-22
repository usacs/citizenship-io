import Axios from "axios";

/**
Paramters: user_info: {user_id: ###, additional_data: ...}
Returns: res: {code: ###, message: "Code information}
*/
export const set_profile_info = user_data => {
  return Axios.post("/profile", {
    user_data
  }).then(res => {
    console.log(res);
  });
};

/**
Paramters: user_info: {user_id: ###}
Returns: res: {code: ###, message: "Code information", country_of_origin: "country"}
*/
export const get_profile_info = user_data => {
  if (user_data.user_id == null) {
    return { code: -1, message: "User_id missing. Required parameter" };
  }
  return axios
    .get("/profile", {
      user_id: user_data.user_id
    })
    .then(res => {
      console.log(res);
    });
};
