import React, {Component} from 'react';
import './index.less'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <i onClick={()=>{
                    this.props.history.goBack()
                }} className="iconfont icon-fanhui"></i>
                <span>{this.props.title}</span>

            </div>
        )
    }
}
export default withRouter(NavBar)