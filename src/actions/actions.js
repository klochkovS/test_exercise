import C from '../constants';

export const logIn = userName => ({
  type: C.LOG_IN,
  userName,
  isAuth: true,
});

export const logOut = () => ({
  type: C.LOG_OUT,
  isAuth: false,
});

export const logEror = errorMsg => ({
  type: C.LOG_FALLEN,
  errorMsg,
});
