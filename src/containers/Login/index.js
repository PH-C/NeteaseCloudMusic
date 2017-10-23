import React, {Component} from 'react';
import profile from '../../images/profile.png';
import {HashRouter as Router, Route,Link,NavLink,Switch} from 'react-router-dom';

import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/actions/session'
import NavBar from "../../components/NavBar/index";
@connect(
    state=>state.session,
    actions
)
export default class Login extends Component {
    handleClick=()=>{
        let mobile=this.refs.mobile.value;
        let password=this.refs.password.value;
        this.props.login({
            mobile,
            password
        })
    }
    render() {
        return (
            <Router>
            <div className="login">

                <div className="up-tai">
                    <a>
                        <i className="iconfont icon-left" onClick={()=>this.props.history.goBack()}> </i>
                    </a>
                    <p>手机号登陆</p>
                </div>

                <input ref="mobile" className="put-1" type="text" placeholder="+86 请输入手机号"/>

                <input ref="password" className="put-2" type="text" placeholder="设置登陆密码 不少于6位"/>

                <p className="pp">{this.props.error}{this.props.success}</p>
            <button ref="obtn" className="btn" onClick={this.handleClick}>登陆</button>

                <span className="ospan" className="iconfont icon-shouji" > </span>
                <b className="ob" className="iconfont icon-suo1"> </b>
                <p className="op">忘记密码？</p>

            </div>
            </Router>
        )
    }
}