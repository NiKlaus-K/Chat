/* 
	1.通过Node.js开启web服务   进入聊天室的客户端  UI界面
	  ES6
	  
	2.fs模块文件io处理
	
	3.开启socket服务   socket服务基于web服务   引入socket模块
	  npm下载  socket.io
	  node_modules 文件夹项目依赖模块集合
*/
var http = require ("http");//引入HTTP模块
var fs = require("fs");//引入fs模块
var ws = require("socket.io");


var server = http.createServer(function(req,res){
	//有两个参数    
	//req ：request   请求
	//res ：response 相应
	var html = fs.readFileSync("./index.html");
	
	res.end(html);//相应结束，发送字符
});//创建一个web服务

var io = ws(server);//启动webSocket服务 挂载到web服务器之上

//ws IO服务器监听到用户的连接事件
io.on("connection",function(socket){
	console.log("用户请求进入聊天室");
	//坚挺到socket当中的消息发送事件
	socket.on("message",function(mes){
		//如果没有注明发给谁 那么就是广播
		io.emit("message",mes);//发送消息事件
	});
});

server.listen(3000);//监听到port端口