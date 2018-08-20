import { FETCH_EMPLOYEES } from "../actions/EmployeeActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};
