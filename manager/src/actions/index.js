export const EMAIL_CHANGED = "EMAIL_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});
