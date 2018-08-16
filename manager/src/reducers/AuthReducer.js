import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_FAIL,
  LOADING
} from "../actions/AuthActions";

const initialState = { email: "", password: "", user: null, loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
