export const isValidData = (email, password, fullName) => {
  // eslint-disable-next-line no-useless-escape
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (fullName.length === 0) return "Name is invalid";

  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};
