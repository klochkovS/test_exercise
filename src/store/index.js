import { createStore } from 'redux';
import reducer from './reducers';



const storeFactory = () => createStore(reducer, { isAuth: false });

export default storeFactory;
