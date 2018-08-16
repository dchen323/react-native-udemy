import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const EMAIL_CHANGED = "EMAIL_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOADING = "LOADING";

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

const loginUserSuccess = user => {
  Actions.main();
  return {
    type: LOGIN_USER,
    payload: user
  };
};

const loginUserFail = () => ({
  type: LOGIN_FAIL,
  payload: "Authentication Failed"
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOADING });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => dispatch(loginUserSuccess(user)))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => dispatch(loginUserSuccess(user)))
        .catch(() => dispatch(loginUserFail()));
    });
};
