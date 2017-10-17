import React, {Component} from 'react';
import Carousel from '../../Carousel/index'
export default class Recommend extends Component {
    render() {
        return (
            <div>
                <Carousel sliders={this.props.banners}/>
                {
                    console.log(this.props.recomList)

                }
            </div>
        )
    }
}