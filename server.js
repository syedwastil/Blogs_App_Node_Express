const http= require('http');
const { url } = require('inspector');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    console.log("request made");
    console.log(req.url,req.method);

    let path='./';
    switch(req.url){
        case '/':
            path+='hello.html';
            res.statusCode=200;
            
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-us':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            break;
    }

    res.setHeader('Content-Type','text/html');
    fs.readFile(path,(err,data)=>{

    if(err){
        console.log(err);
        res.end();
    }else{
       // res.write(data);
        res.end(data);
    }
});
    //res.write('Hello Ninja');
   // res.end();
   
});

server.listen(3001,'localhost',()=>{
    console.log("Listening to port")
});