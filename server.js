/* 
	1.通过Node.js开启web服务   进入聊天室的客户端  UI界面
	  ES6
	  
	2.fs模块文件io处理
	
	3.开启socket服务   socket服务基于web服务   引入socket模块
	  npm下载  socket.io
*/
var http = require ("http");//引入HTTP模块
var fs = require("fs");//引入fs模块


var server = http.createServer(function(req,res){
	//有两个参数    
	//req ：request   请求
	//res ：response 相应
	var html = fs.readFileSync("./index.html");
	
	res.end(html);//相应结束，发送字符
});//创建一个web服务

server.listen(3000);//监听到port端口