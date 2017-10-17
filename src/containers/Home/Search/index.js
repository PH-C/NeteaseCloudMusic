import React, {Component} from 'react';
import './index.less';
export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="search">
                    <i className="iconfont icon-micro"></i>
                    <div className="search-box">
                        <label className="iconfont icon-glass" htmlFor="searchBox">
                            <span>搜索音乐,歌词,电台</span>
                        </label>
                        <input type="text" id="searchBox"/>
                    </div>
                    <i className="iconfont icon-music"></i>
                </div>
            </div>
        )
    }
}