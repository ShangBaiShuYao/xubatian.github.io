function gotoplayer(video_address){
    var videoObject = {  
    container: '.videosamplex',//“#”代表容器的ID，“.”或“”代表容器的class  
variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象  
poster: 'pic/wdm.jpg',  
mobileCkControls: true,//是否在移动端（包括ios）环境中显示控制栏  
mobileAutoFull: false,//在移动端播放后是否按系统设置的全屏播放  
h5container: '#videoplayer',//h5环境中使用自定义容器  
video: video_address//视频地址  
};  
var player = new ckplayer(videoObject);  
}