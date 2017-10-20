import React, {Component} from 'react';
import "./index.less";
import {connect} from 'react-redux';

import actions from '../../store/actions/home';
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom"


import bg1 from '../../images/play-controler.png';
import bg2 from '../../images/cd-wrapper.png';
//装饰者模式
@connect(
    state=>state.home,
    actions
)
export default class Single extends Component {
    constructor(){
        super();
        this.state={
            currentTrackLen:0,//歌单歌曲数量
            currentTrackIndex:0,//当前歌曲播放的索引
            currentTotalTime:0,//当前歌曲总时间
            playStatus:true,//当前歌曲播放状态
            curSong:{},
            songList:[]
        }
    }
    componentWillMount=function () {
        //更新当前歌曲总时间
        let songList=JSON.parse(window.sessionStorage.getItem('curSongList'));
        //songList:songList,


        let {item} = this.props.location.state?this.props.location.state:{};

        let currentIndex=songList.find((song,index)=>{
            if(song.id==item.id){
                this.setState({songList:songList,currentTrackLen:songList.length,curSong:item,currentTrackIndex:index});
            }
        });

        // let currentTrackIndex=currentIndex?currentIndex:0;
        console.log(item);
    }
    componentDidMount= function(){

        this.updatePlayStatus();
    };

    //下一曲事件处理
    next=()=>{
        if(this.state.currentTrackIndex + 1 >=  this.state.currentTrackLen){
            alert('已经没有下一首了');
        }else{
            this.setState({currentTrackIndex:++this.state.currentTrackIndex},()=>{
                this.setState({curSong:this.state.songList[this.state.currentTrackIndex]})

                this.updatePlayStatus();
            });
        }
    };
    //上一曲事件处理
    previous=()=>{
        if(this.state.currentTrackIndex - 1 < 0){
            alert('已经没有上一首了');
        }else{
            this.setState({currentTrackIndex:--this.state.currentTrackIndex},()=>{
                this.setState({curSong:this.state.songList[this.state.currentTrackIndex]})

                this.updatePlayStatus();
            });
        }
    }
    play=()=>{
        this.setState({playStatus:!this.state.playStatus}, ()=>{
            this.updatePlayStatus();
        });
    };
    updatePlayStatus= ()=>{
        // this.setState({curSong:this.state.songList[this.state.currentTrackIndex]})

        let audio = document.getElementById('audio');
        // getComputedStyle(audio,null).height;
        if(this.state.playStatus){
            audio.play();
        }else{
            audio.pause();
        }
    };

    render() {

        // let {item} = this.props.location.state?this.props.location.state:{};
        // console.log(item);
        // console.log(item);
        //"http://m10.music.126.net/20171019191350/690a6117cb869e0169c7135ca5e361f3/ymusic/0cfe/b63e/2f53/deca0598af5452d8592a6d1434fbe7cc.mp3"
        //http://www.1ting.com/api/audio?/zzzzzmp3/2013cMar/01W/01new/14.mp3
        return (
            this.state.curSong?<section className="conta">
                <audio id="audio"  src={this.state.curSong.song.url} preload="none"  ></audio>
                <div className="backgroundImage"> </div>
                <header className="header">
                    <i className="iconfont icon-left" onClick={()=>this.props.history.goBack()}></i>
                    <div className="m-single">
                        <p>{this.state.curSong.al.name}</p>
                        <p>{this.state.curSong.ar[0].name}</p>
                    </div>
                    <i className="iconfont icon-forward"></i>
                </header>

                <main className="main">
                    <img src={bg1} alt="" className="on-off"/>
                    <div className="disc">
                        <div className="rotate">
                            <img src={bg2} alt="" className="circle"/>
                            <div className="m-song-img">
                                <img src={this.state.curSong.al.picUrl} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="operate">
                        <i className="iconfont icon-collected"> </i>
                        <i className="iconfont icon-songList"> </i>
                        <i className="iconfont icon-comments"> </i>
                        <i className="iconfont icon-rectangle"> </i>
                    </div>
                </main>

                <div className="foot">
                    <div className="plan">
                        <span className="current">0</span>
                        <span className="duration">0</span>
                        <div className="proBg">
                            <div className="already" ></div>
                        </div>
                    </div>
                    <div className="control">
                        <i className="iconfont icon-playType"></i>

                        <i className="iconfont icon-forward" onClick={this.previous}></i>
                        {
                            this.state.playStatus?<i className="iconfont icon-pause" onClick={this.play}></i>:<i className="iconfont icon-plays" onClick={this.play}></i>
                        }
                        <i className="iconfont icon-forward" onClick={this.next} ></i>
                        <i className="iconfont icon-playList"></i>
                    </div>
                </div>

            </section>:null
        )
    }
}