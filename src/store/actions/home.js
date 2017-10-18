import {getSliders,getRecomLists,getPlayList,getRankList} from "../../api/home";
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
    },
    fetchRecomLists() {
        return (dispatch, getState) => {
            getRecomLists().then(res => {
                dispatch({
                    type: types.FETCH_RECOMLISTS
                    , recomList: res
                })
            })
        }
    },
    fetchPlayList() {
        return (dispatch, getState) => {
            getPlayList().then(res => {
                dispatch({
                    type: types.FETCH_PLAYLIST
                    , playList: res
                })
            })
        }
    },
    fetchRankList() {
        return (dispatch, getState) => {
            getRankList().then(res => {
                dispatch({
                    type: types.FETCH_RANKINGLIST
                    , rankList: res
                })
            })
        }
    },
    setLocationState(res){
        return (dispatch, getState) => {
            window.sessionStorage.setItem('curLocState',JSON.stringify(res))

        }
    }


}