 import * as types from '../action-types'
 //初始化所有状态

 let initState = {
     sliders: [],      // 轮播图数据
     recomList:[],
     playList:[],
     rankList:[],
     curLocState:{},
     curSongList:[],//当前歌单数据
     collection:[]
 }
//导出一个默认的reducer
export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {...state,sliders:action.sliders};
        case types.FETCH_RECOMLISTS:
            return {...state,recomList:action.recomList};
        case types.FETCH_PLAYLIST:
            return {...state,playList:action.playList};
        case types.FETCH_RANKINGLIST:
            return {...state,rankList:action.rankList};
        case types.SETCURLOCATIONSTATE:
            return {...state,curLocState:action.curLocState};
        case types.SETCURSONGLIST:
            return {...state,curSongList:action.curSongList};
        case types.SET_COLLECTION:
            return {...state,collection:action.collection};
        default:
            return state;
    }
}