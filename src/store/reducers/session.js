import * as types from '../action-types'
let initState={
    user:null,
    success:null,
    error:null
}
//1.注册失败 将失败的原因写入error
//1.登陆失败 将失败的原因写入error
//2.登陆成功 将成功的消息写入success ，并且将用户信息写入user
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_SESSION_INFO:
            return action.session;
        default:
            return state;
    }
}