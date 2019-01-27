import { createStore, combineReducers } from 'redux'
import navReducer from '../reducers/navReducer';
import coinReducer from '../reducers/coinReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  coin: coinReducer
})

export default createStore(rootReducer)
