const http = require('http');

const server = http.createServer((request,response)=>{
	response.setHeader('content-type','text/html; =uft-8')
	response.end('111')
})

server.listen(3030,()=>{
	console.log("服务已启动...")
})