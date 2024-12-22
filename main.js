// import module to create server
const http = require("http");

const server = http.createServer(function(req, res){
    res.end("Hello Word From NodeJs");
});

server.listen(5050);
console.log("Server run success");





