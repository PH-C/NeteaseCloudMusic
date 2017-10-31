import React, {Component} from 'react';
import './index.less';
import bgPlay from '../../../images/index_icon_3x.png';
export default class Search extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            showRes:false,
            showKeyWordsList:false,
            recNewSong:[],
            searchRes:[]
        }
    }
    componentWillMount(){

    }
    getNewSongs=()=>{
        const HOST='http://localhost:3002';
        const urlNewSong='/newsong';

        fetch(`${HOST}${urlNewSong}`,{
            method:'get',
            headers:{
                'Accept':"application/json",
            },
            mode:'cors'
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({recNewSong:res,show:true,showKeyWordsList:true})
        })
    }
    search=(keywords)=>{

        const HOST='http://localhost:3002';
        const urlSearch='/search';


            // let str = "http://47.94.16.170:3000";
            // let url = str.concat('/search');
            // axios.post(url,{keywords:keywords}).then(res=>{
            //    console.log(res);
            // }).catch(res=>{
            //
            // })


        fetch(`${HOST}${urlSearch}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({keywords:keywords})//请求体
        }).then(res => res.json()).then(res=>{
            if(res.code==0){
                console.log(res.songList.songs);
                this.setState({
                    showKeyWordsList:false,
                    showRes:true,
                    searchRes:res.songList.songs
                })

                console.log(this.refs.searchRes);
                this.highlight(this.refs.searchRes.innerHTML,keywords.replace(/(^\s*)|(\s*$)/g, ""))
            }
        });
    }
    onkeySearch=(e)=>{
        this.search(e.target.value)
    }
    highlight=(str,keywords)=>{
        let a=`${keywords}`

        let strHtml= str.replace(new RegExp(a,'gi'),`<span class="highlight">${keywords}</span>`);
        this.refs.searchRes.innerHTML=strHtml;
    }
    render() {
        return (
            <div>
                <div className="search">
                    <i className="iconfont icon-micro"></i>
                    <div className="search-box">
                        <label className="iconfont icon-glass" htmlFor="searchBox">
                            <span>搜索音乐,歌词,电台</span>
                        </label>
                        <input type="text" id="searchBox" onFocus={this.getNewSongs} onKeyUp={this.onkeySearch} />
                    </div>

                    {
                        this.state.show?<span className="cancelSearch" onClick={()=>{
                            this.setState({show:false,showKeyWordsList:true,showRes:false})
                        }}>取消</span>:<i className="iconfont icon-music"  ></i>
                    }
                </div>
                {
                    this.state.show?<div className="searchList">
                        {
                            this.state.showKeyWordsList?<ul className="keyWordsList">
                                {
                                    this.state.recNewSong.map((item,index)=>(
                                        <li key={index} onClick={()=>{this.search(item.name)}} >{item.name}</li>
                                    ))
                                }
                            </ul>:null
                        }

                        {
                            this.state.showRes?<div className="showSearchRes" ref="searchRes">
                                <ul>
                                    {
                                        this.state.searchRes.map((item,index)=>(
                                            <li key={index}>
                                                <div className="sg-left" >
                                                    <div className="sg-left-top" >{item.name}</div>
                                                    <div className="sg-left-bottom">{item.ar[0].name}-{item.al.name}</div>
                                                </div>

                                                <div className="sg-right">
                                                    <span> </span>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>:null
                        }
                    </div>:null
                }
                {/*{*/}
                    {/*this.state.showRes?<div className="showSearchRes">*/}
                        {/*<ul>*/}
                            {/*{*/}
                                {/*this.state.searchRes.map((item,index)=>(*/}
                                    {/*<li key={index}></li>*/}
                                {/*))*/}
                            {/*}*/}
                        {/*</ul>*/}
                    {/*</div>:null*/}
                {/*}*/}


            </div>
        )
    }
}