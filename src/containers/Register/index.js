import React, {Component} from 'react';
import profile from '../../images/profile.png';
import './index.less';
import {HashRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from "../../components/NavBar/index";

import actions from '../../store/actions/session'
@connect(
    state=>state.session,
    actions
)

export default class Register extends Component {
    handleClick=(e)=>{
        // this.refs.obtn2.style.backgroundColor='#C10719';
        let mobile=this.refs.mobile.value;
        let password=this.refs.password.value;
        this.props.register({
            mobile,
            password
        })
    }
    render() {
        return (
            <div className="reg">

                <div className="up-tai"><a>
                    <i className="iconfont icon-left" onClick={()=>this.props.history.goBack()} > </i>
                </a>
                    <p>手机号注册</p>
                </div>

                <input ref='mobile' className="put-1" type="text" placeholder="+86 请输入手机号"/>

                <input ref='password' className="put-2" type="text" placeholder="设置登陆密码 不少于6位"/>

                <p className="pp">{this.props.error}{this.props.success}</p>
                <button ref="obtn2" className="btn" onClick={this.handleClick}>下一步</button>

                <span className="ospan" className="iconfont icon-shouji" > </span>
                <b className="ob" className="iconfont icon-suo1"> </b>
            </div>

        )
    }
}