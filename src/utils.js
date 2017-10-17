export function uploadMore(element,callBack) {
    //限流
    let timer;
    element.addEventListener('scroll',(evt)=>{
        timer&&clearTimeout(timer)
        setTimeout(()=>{
            let scrollTop=element.scrollTop;
            let winHeight=element.clientHeight;
            let contentHeight=element.scrollHeight;
            if(scrollTop+winHeight+10>=contentHeight){
                callBack();
            }
        },300)
    })
}
export function downRefresh(element,callBack) {
    let body=document.body||document.documentElement;
    body.addEventListener('touchstart',touchStart)
    let startY;//开始滑动的纵坐标
    let touchDistance;//滑动的总距离
    function touchStart(event) {
        if(element.offsetTop==60&&element.scrollTop==0){
            startY=event.targetTouches[0].pageY;
            touchDistance=0;
            body.addEventListener('touchmove',touchMove);
            body.addEventListener('touchend',touchEnd);
        }

        function touchMove(event){
            let pageY=event.targetTouches[0].pageY;
            if(pageY>startY){
                element.style.top=(pageY-startY+60)+'px';
                touchDistance=pageY-startY;
            }else{
                body.removeEventListener('touchmove',touchMove)
                body.removeEventListener('touchend',touchEnd)
            }
        }

        function touchEnd() {
            body.removeEventListener('touchmove',touchMove)
            body.removeEventListener('touchend',touchEnd)

            let timer=setInterval(()=>{
               element.style.top=(element.offsetTop-1)+'px';
               if(element.offsetTop==60){
                   clearInterval(timer)
               }
            },5)
            if(touchDistance>50)
                callBack();//
        }
    }
}