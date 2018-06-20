import { createStore } from 'redux';
import reducer from './reducers';

const storeFactory = () => createStore(reducer, { userName: 'anon', isAuth: true });

export default storeFactory;
