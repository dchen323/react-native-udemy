import firebase from "firebase";

export const EMAIL_CHANGED = "EMAIL_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

const loginUserSuccess = user => ({
  type: LOGIN_USER,
  payload: user
});

const loginUserFail = () => ({
  type: LOGIN_FAIL,
  payload: "Authentication Failed"
});

export const loginUser = ({ email, password }) => dispatch =>
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
