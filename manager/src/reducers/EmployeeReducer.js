import { UPDATE_EMPLOYEE } from "../actions/EmployeeActions";

const initialState = { name: "", phone: "", shift: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};