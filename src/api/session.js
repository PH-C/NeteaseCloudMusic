import {post} from './index';


export function register(user){
    return post('/register',user);
}
export function login(user){
    return post('/login',user);
}
// export function exit(user) {
//     return post('/exit',user)
// }