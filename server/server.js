let express=require('express');
let app=express();
let bodyParser=require('body-parser');
app.use(bodyParser.json());
let session = require('express-session');
app.listen(3002);
//获取真实的轮播图数据
let sliders=require('./mock/sliders');
let recommendList=require('./mock/recommendList');
let newSongs=require('./mock/newSongs');
let searchRes=require('./mock/searchResult');
let track=require('./mock/track');
let songs=require
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));

app.use(function (req,res,next) {
    setTimeout(()=>{
        next()
    },1000)
})
//如果客户端要向服务器发送cookie时。绝不对写*
app.use(function(req,res,next){
    //如果客户端要向服务器发送cookie的话，绝不对写*
    res.header('Access-Control-Allow-Origin',"http://localhost:8080");
    res.header('Access-Control-Allow-Headers',"Content-Type");
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
    //允许跨域传cookie
    res.header('Access-Control-Allow-Credentials',"true");
    if(req.method =='OPTIONS'){
        res.end('');
    }else{
        next();
    }
});

app.get('/sliders',function (req,res) {
    res.json(sliders.banners);
});

app.get('/recommendList',function (req,res) {
    res.json(recommendList.recomList);
});

app.get('/newsong',function (req,res) {
    res.json(newSongs.newSongList);
});
app.get('/songmenudetail',function (req,res) {
    res.json(track.playlist);
});
app.post('/search',function (req,res) {
    let songName =req.body.keywords.replace(/(^\s*)|(\s*$)/g, "");
    let songLists = searchRes.result;
    let songList=songLists.find(item=>item.highlights[0]==songName);
    console.log(songList);
    if(songList){
        res.json({code:0,success:'查找成功',songList:songList})
    }else{
        res.json({code:1,error:'查找失败'})
    }
});

let users=[];
app.post('/login',function (req,res) {
    let user =req.body;
    let oldUser=users.find(item=>item.mobile==user.mobile&&item.password==user.password);
    if(oldUser){
        req.session.user=user;
        res.json({code:0,success:'登陆成功',user:user})
    }else{
        res.json({code:1,error:'登陆失败'})
    }
})
app.post('/register',function (req,res) {
    let user =req.body;
    let oldUser=users.find(item=>item.mobile==user.mobile);
    if(oldUser){
        res.json({code:1,error:'用户名重复'})
    }else{
        users.push(user);
        res.json({code:0,success:'用户注册成功'})
    }
})