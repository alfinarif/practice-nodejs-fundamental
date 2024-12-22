// import module to create server
const http = require("http");

const server = http.createServer(function(req, res){

    if (req.url == "/"){
        res.writeHead(200, {"Content-Type": "Alfin Arif"});
        res.write("<h1>This is Home Page From NodeJs Server!</h1>");
        res.end();
    }
    else if (req.url == "/about"){
        res.writeHead(200, {"Content-Type": "Alfin Arif"});
        res.write("<h1>This is About Page From NodeJs Server!</h1>");
        res.end();
    }
    else if (req.url == "/contact"){
        res.writeHead(200, {"Content-Type": "Alfin Arif"});
        res.write("<h1>This is Contact Page From NodeJs Server!</h1>");
        res.end();
    }

});

server.listen(5050);
console.log("Server Started...");