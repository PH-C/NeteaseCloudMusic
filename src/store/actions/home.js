import {getSliders} from "../../api/home";
import * as types from '../action-types';
//先从后台接口
export default {
    //返回一个函数
    fetchSliders() {
        return (dispatch, getState) => {
            getSliders().then(res => {
                dispatch({
                    type: types.FETCH_SLIDERS
                    , sliders: res
                })
            })
        }
    }
}