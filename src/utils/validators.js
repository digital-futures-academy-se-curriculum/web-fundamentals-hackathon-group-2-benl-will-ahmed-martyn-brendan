export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateName = (name) => {
  const re = /^[a-zA-Z-' ]+$/;
  return re.test(name) && name.length < 16 && name.length > 0;
};
