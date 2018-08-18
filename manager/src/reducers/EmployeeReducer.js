import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEES
} from "../actions/EmployeeActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_EMPLOYEE:
      return state;
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};
