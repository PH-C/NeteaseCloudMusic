import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom"
import './index.less'
export default class RankingList extends Component {
    constructor(){
        super();
        this.state={update:'10月12日'}
    }
    gainClassName=(index)=>{
        return index<3?"bgCol":null;
    };
    render() {
        return (<Router>
            <div className="m-rank">
                <div className='rankTop'>
                    <div className="hotopct">
                        <div className="bg-1"> </div>
                        <div className="hottime">更新时间：{this.state.update}</div>
                    </div>
                </div>
                <div className="hotcont">
                    <ul className="rankList">
                    {
                        this.props.rankingList.tracks?this.props.rankingList.tracks.map((item,index)=>(
                            index>19?null:
                                <li key={index} className="rankList-item"><NavLink exact to="/detail" playlist={this.props.rankingList.tracks}>
                                    <div className={"rank-left "+this.gainClassName(index)}>{index+1}</div>
                                    <div className="rank-right">
                                        <div className="sgfr">
                                            <div className="sgna">{item.name}</div>
                                            <div className="singer">{item.ar[0].name} - {item.al.name}</div>
                                        </div>
                                        <div className="sides">
                                            <span> </span>
                                        </div>
                                    </div>
                                </NavLink> </li>
                        )):null
                    }
                    </ul>
                </div>
            </div>
            </Router>
        )
    }
}