import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
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

export const updateEmployee = ({ prop, value }) => ({
  type: UPDATE_EMPLOYEE,
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
