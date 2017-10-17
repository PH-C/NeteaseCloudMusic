import session from './session';
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux';
export default combineReducers({
    session,
    router: routerReducer
})