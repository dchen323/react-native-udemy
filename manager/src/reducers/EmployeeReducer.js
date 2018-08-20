import {
  UPDATE_TEXT,
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEES
} from "../actions/EmployeeActions";

const initialState = { name: "", phone: "", shift: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_EMPLOYEE:
      return initialState;
    case FETCH_EMPLOYEES:
      return initialState;
    default:
      return state;
  }
};
