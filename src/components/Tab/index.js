import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
export default class Tab extends Component {
    render() {
        return (
            <div>
                <nav className="footer">
                    <NavLink exact to="/">
                        <i className="iconfont icon-Music"></i>
                        发现音乐
                    </NavLink>
                    <NavLink to="/mymusic">
                        <i className="iconfont icon-music1-copy"></i>
                        我的音乐
                    </NavLink>
                    <NavLink to="/profile">
                        <i className="iconfont icon-zhanghao1"></i>
                        个人中心
                    </NavLink>

                </nav>
            </div>
        )
    }
}