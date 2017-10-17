import React, {Component} from 'react';
import Music from './Music/index';
import Search from './Search/index'
import './index.less';
export default class Home extends Component {
    componentWillMount(){

    }
    //组件加载完成后
    componentDidMount(){

    }

    render() {
        return (
            <div>
                <div className="container" ref="container">
                    <Search/>
                    <Music/>
                </div>
            </div>
        )
    }
}