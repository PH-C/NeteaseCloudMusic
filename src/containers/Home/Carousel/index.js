import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {index: 0}
    }

    render() {
        let options = {
            continuous: true,
            auto: 1000,
            disableScroll: true,
            //每轮播一次会调用此回调方法并传入最新的索引
            callback: (index) => {
                this.setState({index});
            }
        };
        return (
            <div className="sliders">
                {/*{console.log(this.props.sliders)}*/}
                {
                    this.props.sliders.length > 0 ? <ReactSwipe className="carousel" swipeOptions={options}>
                        {
                            this.props.sliders.map((item, index) => (
                                <div key={index}><img src={item.pic} style={{width: '100%', height: '160px'}}/></div>
                            ))
                        }
                    </ReactSwipe> : <div>数据加载中</div>
                }

                <div className="dots">
                    {
                        this.props.sliders.map((item, index) => (
                            <span className={this.state.index == index ? "active" : ""} key={index}></span>
                        ))
                    }
                </div>
            </div>
        )
    }
}