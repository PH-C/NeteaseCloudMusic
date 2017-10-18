import React, {Component} from 'react'
import './index.less'
import Play from '../../images/play.png'
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
//装饰者模式
@connect(
    state=>state.home,
    actions
)
export default class SongMenuDetail extends Component {
    constructor(){
        super();
        this.state={
            songList:[]
        };
    }
    componentWillMount(){
        const HOST='http://localhost:3002';
        const urlSonglist='/songmenudetail';
        fetch(`${HOST}${urlSonglist}`,{
            method:'get',
            //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
            credentials:'include',
            headers:{
                'Accept':"application/json",
            },
        }).then(res=>res.json()).then(res=>{
            this.setState({songList:res.tracks})


        })
    }
    render() {
        console.log(this.state.songList);
        //缓存location
        this.props.location.state? this.props.setLocationState(this.props.location.state):null;
        let {name, picUrl} = this.props.location.state ? this.props.location.state.list :JSON.parse(window.sessionStorage.getItem('curLocState')).list;
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                        <i className="iconfont icon-left"></i>
                        歌单
                        <i className="iconfont icon-music"></i>
                    </div>
                    <div className="header-cover">
                        <img src={picUrl}/>
                    </div>
                    <div className="header-text">
                        <p>{name}</p>
                    </div>
                    <div className="header-footer">
                        <div className="footer-items">
                            <span>
                                <i className="iconfont icon-noCollect"></i>
                            </span>
                            <span>
                                <i className="iconfont icon-comments"></i>
                            </span>
                            <span>
                                <i className="iconfont icon-forwarding"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="songlist">
                    <ul>
                        {
                            this.state.songList.map((item,index)=>(
                                <li key={index} >
                                    <div className="ranking">{index+1}</div>
                                    <div className="content">
                                        <div className="title">{item.name}</div>
                                        <div className="singer">{item.ar[0].name}</div>
                                    </div>
                                    <div className="play">
                                        <img src={Play} alt=""/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}