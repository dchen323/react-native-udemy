import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";

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
      Actions.pop();
      dispatch({ type: CREATE_EMPLOYEE });
    });
};
