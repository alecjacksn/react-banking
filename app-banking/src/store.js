import {createStore, applyMiddleware} from 'redux'
import user_reducer from './ducks/user_reducers'

import promiseMiddleware from 'redux-promise-middleware'




export default createStore(user_reducer, {}, applyMiddleware(promiseMiddleware()));