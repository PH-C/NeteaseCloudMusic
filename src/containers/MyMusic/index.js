import React, {Component} from 'react';
// import List from '../../../server/mock/collection'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import './index.less'
@connect(
    state=>state.home
)
export default class MyMusic extends Component {
    render() {
        console.log(this.props.collection);
        let arr=this.props.collection.collection;
        let ary=arr instanceof Array?arr:[];
        return (
            <div className="mylist">
                <div className="up-tai">
                    <i className="iconfont icon-left" onClick={()=>this.props.history.goBack()} > </i>

                    <p>我的收藏</p>
                </div>
                { console.log(this.props.collection)}
                <ul>
                    {
                        ary.map((list,index)=>(
                            <li key={index} >
                                <Link to={{pathname:'/songmenudetail',state:{list}}}>

                                    <div className="music-cover">
                                        <img src={list.picUrl}/>
                                    </div>
                                    <div className="content">
                                        <div className="title">{list.name}</div>
                                        <div className="singer">{list.tracks.length}首</div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}