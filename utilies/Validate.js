export const ValidateEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const ValidatePassword = password => {
  if (password.length > 7) return true;
  return false;
};
