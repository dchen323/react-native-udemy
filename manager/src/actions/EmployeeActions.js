import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const UPDATE_TEXT = "UPDATE_TEXT";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";

export const fetchEmployees = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on("value", snapshot => {
      dispatch({ type: FETCH_EMPLOYEES, payload: snapshot.val() });
    });
};

export const updateText = ({ prop, value }) => ({
  type: UPDATE_TEXT,
  payload: { prop, value }
});

export const createEmployee = ({ name, phone, shift }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: CREATE_EMPLOYEE });
      Actions.pop();
    });
};

export const udpateEmployee = ({ name, phone, shift, uid }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift });
};
