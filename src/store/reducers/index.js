import session from './session';
import home from './home'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux';
export default combineReducers({
    home,
    session,
    router: routerReducer
})