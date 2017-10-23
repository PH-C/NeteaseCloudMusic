# NeteaseCloudMusic
NeteaseCloudMusic React

# 仿网易云音乐
这个项目是仿照网易云音乐的react技术栈项目。项目中有个server服务，模拟服务器环境，为前端提供数据来源，当用npm run dev命令运行前端环境时，就可以直接将前端资源部署到server服务里。因此本项目有两个环境，一个是前端开发环境(端口是8080)，一个是server服务环境(端口是3002)。
# 技术栈
- react
- react-router
- redux
- nodejs
- express

# 项目结构
```
├─server——————— 后台server文件 
| └─mock——————模拟后台请求数据的文件夹 
├─src————————项目文件 
│ ├─components———-公共组件 
│ │ ├─Tab————–底部菜单组件 
│ │ │─NavBar————–头部组件 
│ │ │_TabsControl———首页tab切换组件 
│ │ └─Protected———–登陆保护组件 
│ ├─container—————页面级组件 
│ │ ├─Home—————-首页 
│ │ │ ├─Carousel———–首页轮播图 
│ │ │ │─Music————-发现音乐页 
│ │ │ │ │_Recommend——-推荐音乐页 
│ │ │ │ │_RankingList—–排行榜页 
│ │ │ │ └─SongList——–歌单列表页 
│ │ │ │ 
│ │ │ └─Search————搜索音乐组件 
│ │ │ 
│ │ │_MyMusic—————-我的音乐页 
│ │ │_SongMenuDetail———歌单详情页 
│ │ │_Single—————–单曲播放页 
│ │ ├─Login——————登录页 
│ │ │─Register—————注册页 
│ │ └─Profile—————-个人中心页 
│ │ 
│ ├─images——————-静态图片 
│ ├─store———————-redux store文件夹 
│ │ ├─actions—————-各页面actions集合文件 
│ │ │ │_home—————–首页action 
│ │ │ └─session————–处理登陆注册的action 
│ │ │ 
│ │ └─reducers————–reducers 文件夹 
│ │   │─home——————处理首页各组件状态的reducer 
│ │   └─session—————处理登陆注册状态的reducer 
│ │ 
│ └─style———————-公共样式 
└─utils————————–工具库
```
# 项目运行方法

- STEP 1 : 克隆并安装依赖

git clone https://github.com/PH-C/NeteaseCloudMusic.git
cd NeteaseCloudMusic
npm init -y
npm install
- STEP 2 : npm run dev命令运行前端资源并启动server服务
http://localhost:8080/#/
# 开发计划
## 已完成功能
  推荐列表、歌单列表、排行榜、搜索功能(待优化)、歌单详情页、歌曲播放功能(播放、暂停、上一曲、下一曲)、歌单收藏、歌曲收藏功能
## 待完成功能
  歌曲播放功能（循环播放、自动下一曲功能、进度条功能、歌词声词同步滚动功能）、歌单歌曲评论功能、新建收藏夹功能、分享功能、下载歌曲功能
