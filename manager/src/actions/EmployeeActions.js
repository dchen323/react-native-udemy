export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const updateEmployee = ({ prop, value }) => ({
  type: UPDATE_EMPLOYEE,
  payload: { prop, value }
});
