//向后台发送get请求，返回promise
const HOST='http://localhost:3002';
export const get=(url)=>{
    return fetch(`${HOST}${url}`,{
        method:'get',
        //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
        credentials:'include',
        headers:{
            'Accept':"application/json",
        },
    }).then(res=>res.json())
}

export const post = (url,body) => {

    return fetch(`${HOST}${url}`, {
        method: 'post',
        //默认跨域时为了安全，不携带cookie,加上此选项可以带上cookie
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)//请求体
    }).then(res => res.json());
}