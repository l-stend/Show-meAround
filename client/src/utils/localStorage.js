export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  console.log(
    ' getUserFromLocalStorage funonzia ma non funonzia, controllalo se si rompe qualcosa'
  );
  // console.log(user);
  return user;
};
