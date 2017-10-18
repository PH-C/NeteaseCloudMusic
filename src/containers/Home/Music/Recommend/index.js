import React, {Component} from 'react';
import Carousel from '../../Carousel/index'
import './index.less'
import {Link} from 'react-router-dom'

export default class Recommend extends Component {
    render() {
        let recommendList = this.props.recomList;
        return (
            <div>
                <div className="recommendation">
                    <Carousel sliders={this.props.banners}/>
                    <h1 className="recommendation-title">
                        <b>个性推荐</b>
                        <i className="iconfont icon-right"></i>
                    </h1>
                    {console.log(recommendList)}
                    <ul className="recommendation-list">
                        {
                            recommendList.map((list, index) => (
                                <li key={index} className="recommend-items">
                                    <Link to={{pathname:'/songmenudetail',state:{list}}}>
                                        <i className="iconfont icon-headset"></i>
                                        <img src={list.picUrl}/>
                                        <p>{list.name}</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}