import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import navReducer from '../reducers/navReducer'
import coinReducer from '../reducers/coinReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  coin: coinReducer
})

export default createStore(rootReducer, {}, applyMiddleware(thunk))
