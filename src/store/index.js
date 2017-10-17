import {createStore,applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//let store=applyMiddleware(thunk)(createStore)(reducer)
//执行action applyMiddleware
//中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
import {routerMiddleware} from 'react-router-redux'

import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
const middleware = routerMiddleware(history)
let store = createStore(reducer,applyMiddleware(middleware,thunk));
window.store = store;
export default store

