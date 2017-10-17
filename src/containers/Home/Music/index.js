import React, {Component} from 'react';
import TabsControl from "../../../components/TabsControl/index";
import Recommend from './Recommend/index';
import SongList from './SongList/index';
import RankingList from './RankingList/index';
export default class Music extends Component {
    constructor(){
        super();
        this.state={
            recomList:[],
            banners:[]
        }
    }
    componentWillMount(){
        const HOST='http://localhost:3002';
        const urlRec='/recommendList';
        const urlBanner='/sliders';

        fetch(`${HOST}${urlRec}`,{
            method:'get',
            //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
            credentials:'include',
            headers:{
                'Accept':"application/json",
            },
        }).then(res=>res.json()).then(res=>{
            this.setState({recomList:res})
        })

        fetch(`${HOST}${urlBanner}`,{
            method:'get',
            //默认跨域时为了安全，不携带cookie，加上此选项可以带上cookie
            credentials:'include',
            headers:{
                'Accept':"application/json",
            },
        }).then(res=>res.json()).then(res=>{
            this.setState({banners:res})
        })

    }
    render() {
        return (
            <div className="tab_container">
                <TabsControl>
                    <div name = "个性推荐">
                        <Recommend recomList={this.state.recomList} banners={this.state.banners}/>
                    </div>
                    <div name = "歌单">
                        <SongList/>
                    </div>
                    <div name = "排行榜">
                        <RankingList/>
                    </div>
                </TabsControl>
            </div>
        )
    }
}