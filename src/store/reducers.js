import C from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case C.LOG_IN:
      return {
        ...state,
        userName: action.userName,
        errorMsg: action.errorMsg,
        isAuth: action.isAuth,
      };
    case C.LOG_OUT:
      return {
        ...state,
        userName: null,
        isAuth: action.isAuth,
      };
    case C.LOG_FALLEN:
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
