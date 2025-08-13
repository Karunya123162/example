const http = require('http');

//create a server
const server = http.createServer((req,res)=>{
   if(req.url == '/' && req.method ==='GET'){
    res.end('Welcome to the Home Page');
   }else if(req.url === '/about'){
     res.end('About page');
   }else{
    res.writeHead(404);
    res.end('Page not found');
   }
});

//start the server
server.listen(3000,()=>{
    console.log('Server is running');
})