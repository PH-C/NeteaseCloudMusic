import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Tab from '../components/Tab/index.js'
import Home from './Home/index'
import MyMusic from './MyMusic/index'
import Profile from './Profile/index'
import Detail from './Detail/index'
import Login from './Login/index'
import Register from './Register/index'
import Protected from "../components/Protected/index";
import {ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
const history=createHashHistory();

import '../style/common.less'
import '../components/Tab/index.less'
export default class App extends Component {
    render() {
        return (
            <div>
                <ConnectedRouter history={history}>

                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Protected path="/mymusic" component={MyMusic}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/detail" component={Detail}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    <Tab/>
                    </div>
                </ConnectedRouter>
            </div>
        )
    }
}