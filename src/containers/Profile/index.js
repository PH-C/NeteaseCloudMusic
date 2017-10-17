import React, {Component} from 'react';
import './index.less'
import profile from '../../images/profile.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
//装饰者模式
@connect(
    state=>state.session,
)

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile">
                    <div className="user-login">
                        <img src={profile}/>
                        {
                            this.props.user?<span>欢迎~{this.props.user.mobile}</span>:<Link to="/login">登录</Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}