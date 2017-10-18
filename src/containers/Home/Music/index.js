import React, {Component} from 'react';
import TabsControl from "../../../components/TabsControl/index";
import Recommend from './Recommend/index';
import SongList from './SongList/index';
import RankingList from './RankingList/index';
import {connect} from 'react-redux';
import actions from '../../../store/actions/home';
//装饰者模式
@connect(
    state=>state.home,
    actions
)
export default class Music extends Component {
    constructor(){
        super();
        this.state={
            recomList:[],
            banners:[],
            rankingList:[],
            playList:[]
        }
    }
    componentWillMount(){
        if(this.props.sliders.length == 0){
            this.props.fetchSliders();
            this.props.fetchRecomLists();
            this.props.fetchPlayList();
            this.props.fetchRankList()

        // const HOST='http://localhost:3002';
        // const urlRec='/recommendList';
        // const urlBanner='/sliders';
        // const urlRankList='/rankList';
        // const urlPlayList='/playlist';

        // fetch(`${HOST}${urlRec}`,{
        //     method:'get',
        //     //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
        //     credentials:'include',
        //     headers:{
        //         'Accept':"application/json",
        //     },
        // }).then(res=>res.json()).then(res=>{
        //     this.setState({recomList:res})
        // })

        // fetch(`${HOST}${urlBanner}`,{
        //     method:'get',
        //     //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
        //     credentials:'include',
        //     headers:{
        //         'Accept':"application/json",
        //     },
        // }).then(res=>res.json()).then(res=>{
        //     this.setState({banners:res})
        // })
        //
        // fetch(`${HOST}${urlRankList}`,{
        //     method:'get',
        //     //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
        //     credentials:'include',
        //     headers:{
        //         'Accept':"application/json",
        //     },
        // }).then(res=>res.json()).then(res=>{
        //     this.setState({rankingList:res})
        // })

        // fetch(`${HOST}${urlPlayList}`,{
        //     method:'get',
        //     //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
        //     credentials:'include',
        //     headers:{
        //         'Accept':"application/json",
        //     },
        // }).then(res=>res.json()).then(res=>{
        //     this.setState({playList:res})
        // })
        }

    }
    render() {
        return (
            <div className="tab_container">
                <TabsControl>
                    <div name = "个性推荐">
                        <Recommend recomList={this.props.recomList} banners={this.props.sliders}/>
                    </div>
                    <div name = "歌单">
                        <SongList playList={this.props.playList}/>
                    </div>
                    <div name = "排行榜">
                        <RankingList rankingList={this.props.rankList}/>
                    </div>
                </TabsControl>
            </div>
        )
    }
}