import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_FAIL
} from "../actions";

const initialState = { email: "", password: "", user: null };

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
