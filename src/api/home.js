import {get} from './index';
export function getSliders() {
    return get('/sliders')
}
export function getRecomLists() {
    return get('/recommendList')
}
export function getPlayList() {
    return get('/playlist')
}
export function getRankList() {
    return get('/rankList')
}

