import { CREATE_EMPLOYEE, FETCH_EMPLOYEES } from "../actions/EmployeeActions";

const initialState = { name: "", phone: "", shift: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return initialState;
    default:
      return state;
  }
};
