import React, {Component} from 'react';
import profile from '../../images/profile.png';
import {Link} from 'react-router-dom';

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
            <div className="login">
                <NavBar title="登录"/>
                <div className="avatar">
                    <img src={profile}/>
                </div>

                <ul className="forms">
                    <li>
                        <input ref="mobile" type="text" placeholder="用户名"/>
                    </li>
                    <li>
                        <input ref="password" type="text" placeholder="密码"/>
                    </li>
                    <li><Link to="/register">前往注册</Link></li>
                    <li><button onClick={this.handleClick}>登陆</button></li>
                    <li>
                        {this.props.error}{this.props.success}
                    </li>
                </ul>
            </div>

        )
    }
}