import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
export default class SongList extends Component {
    constructor(){
        super();
    }
    componentWillMount(){

    }
    render() {
        return (
            <div>
                <ul className="outer">
                    {
                        this.props.playList.length ? this.props.playList.map((item,index)=>(

                            <li  key={index} className="img-left">
                                <Link to="/detail">
                                    <i className="iconfont icon-headset">{item.playCount}万</i>
                                    <img className="img-map" src={item.coverImgUrl} alt=""/>
                                    <p className="op">{item.name}</p>
                                </Link>
                            </li>

                        )) : <div>加载中</div>

                    }
                </ul>
            </div>
        )
    }
}