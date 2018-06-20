import { createStore } from 'redux';
import reducer from './reducers';

const storeFactory = () => createStore(reducer, { userName: 'test', isAuth: false });

export default storeFactory;
