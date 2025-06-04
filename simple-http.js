const http=require('http')
const hostname='127.0.0.1';
const port=3000
const server =http.createServer((req,res)=>{
 if (req.url==='/') {
       res.statusCode=200
       res.setHeader("Content-Type",'text/plain')
       res.end("Hello from server")
 }else if(req.url==='/login'){
    res.statusCode=200
    res.end("Hello from login page")

 }
   })
server.listen(port,hostname,()=>{
    console.log(`Hello from server running on ${port}`)
})