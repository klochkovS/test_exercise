import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const initialState = {
  userName: 'test',
  isAuth: false,
};

const saver = store => next => (action) => {
  const returnValue = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return returnValue;
};

const storeFactory = () => createStore(
  reducer,
  localStorage['redux-store'] ?
    JSON.parse(localStorage['redux-store']) :
    initialState,
  applyMiddleware(saver),
);

export default storeFactory;
