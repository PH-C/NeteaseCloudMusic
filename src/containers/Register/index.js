import React, {Component} from 'react';
import profile from '../../images/profile.png';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from "../../components/NavBar/index";

import actions from '../../store/actions/session'
@connect(
    state=>state.session,
    actions
)

export default class Register extends Component {
    handleClick=(e)=>{
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
                <NavBar title="注册"/>
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
                    <li><Link to="/login">前往登录</Link></li>
                    <li><button onClick={this.handleClick}>注册</button></li>
                    <li>
                        {this.props.error}{this.props.success}
                    </li>
                </ul>
            </div>

        )
    }
}