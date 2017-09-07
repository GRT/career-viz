import { combineReducers } from 'redux';

import dataReducer from './DataReducer';
import viewReducer from './ViewReducer';

const AllReducers =  combineReducers({
  data: dataReducer,
  view: viewReducer
});

export default AllReducers;
