import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router,Route,Link,Redirect,Switch} from "react-router-dom"

import './index.less'
@connect(
    state=>state
)
export default class MyMusic extends Component {
    constructor(){
        super();
        this.state={curUserlikes:[]}
    }
    componentDidMount(){
        let body={username:this.props.session.user.mobile};
        const HOST='http://localhost:3002';
        const url='/getcollect';
        fetch(`${HOST}${url}`, {
            method: 'post',
            //默认跨域时为了安全，不携带cookie,加上此选项可以带上cookie
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)//请求体
        }).then(res => res.json()).then(res=>{
            console.log(res);
            this.setState({curUserlikes:res.likes})
        });
    }
    render() {
        console.log(this.props.home.collection);
        let arr=this.props.home.collection.length>0? this.props.home.collection.collection:this.state.curUserlikes;

        let ary=arr instanceof Array?arr:[];
        return (
            <div className="mylist">
                <div className="up-tai">
                    <i className="iconfont icon-left" onClick={()=>this.props.history.goBack()} > </i>
                    <p>我的收藏</p>
                </div>
                <ul>
                    {
                        ary.map((list,index)=>(
                            <li key={index} >
                                <Link to={{pathname:'/songmenudetail',state:{list}}}>

                                    <div className="music-cover">
                                        <img src={list.picUrl}/>
                                    </div>
                                    <div className="content">
                                        <div className="title">{list.name}</div>
                                        <div className="singer">{list.tracks.length}首</div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}