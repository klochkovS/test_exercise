const authData = {
  login: 'root',
  password: 'qwerty1',
};

const checkAuth = (inputData) => {
  if (inputData.userName !== authData.username ||
    inputData.password !== authData.password) {
    return false;
  }
  return true;
};

export default checkAuth;
