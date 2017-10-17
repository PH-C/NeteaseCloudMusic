import {register,login} from "../../api/session";
import * as types from '../action-types';
import {push} from 'react-router-redux'
export default {
    register(user){
        return function (dispatch,getStatus) {
            register(user).then(res=>{
                console.log(res);
                let {code,...session}=res;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//注册成功了,跳转到登录页 action creator
                    dispatch(push('/login'));
                }
            })

        }
    },
    login(user){
        return function (dispatch,getStatus) {
            login(user).then(res=>{
                console.log(res);
                let {code,...session}=res;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//登陆成功了,跳转到登录页 action creator
                    dispatch(push('/profile'));
                }
            })

        }
    }
}

