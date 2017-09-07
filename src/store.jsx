import { createStore } from 'redux';

import AllReducers from './reducers/MasterReducer.jsx';
import Defaults from './defaultStates/Defaults.jsx';


const store = createStore(AllReducers , Defaults);

export default store;
