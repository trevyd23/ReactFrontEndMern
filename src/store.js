import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './redux/reducers/index'

const initialState = {}

const middleware = [thunk]

const store = createStore(appReducer, initialState, compose(
  applyMiddleware(...middleware),
))

export default store
