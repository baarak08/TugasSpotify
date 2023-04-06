import { auth_types } from "./types";

const init = {
  email: "",
  passsword: "",
};

function userReducer(state = init, action) {
  console.log(action);
  // action adalah event yang terjadi
  if (action.type == auth_types.login) {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  } else if (action.type == auth_types.logout) {
    return init;
  }
  return state;
}

export default userReducer;
