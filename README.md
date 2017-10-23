# NeteaseCloudMusic
NeteaseCloudMusic React

# 仿网易云音乐
这个项目是仿照网易云音乐的react技术栈项目。项目中有个server服务，模拟服务器环境，为前端提供数据来源，当用npm run dev命令运行前端环境时，就可以直接将前端资源部署到server服务里。因此本项目有两个环境，一个是前端开发环境(端口是8080)，一个是server服务环境(端口是3002)。
#技术栈
react
react-router
redux
nodejs
express

# 项目结构
# 项目运行方法

STEP 1 : 克隆并安装依赖

git clone https://github.com/PH-C/NeteaseCloudMusic.git
cd NeteaseCloudMusic
npm init -y
npm install
STEP 2 : npm run dev命令运行前端资源并启动server服务
http://localhost:8080/#/
# 开发计划
## 已完成功能
  推荐列表、歌单列表、排行榜、搜索功能(待优化)、歌单详情页、歌曲播放功能(播放、暂停、上一曲、下一曲)、歌单收藏、歌曲收藏功能
## 待完成功能
  歌曲播放功能（循环播放、自动下一曲功能、进度条功能、歌词声词同步滚动功能）、歌单歌曲评论功能、新建收藏夹功能、分享功能、下载歌曲功能
