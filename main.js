// import module to create server
const http = require("http");
const url = require('url'); // import URL module

const server = http.createServer(function(req, res){

    let myUrl = "https://rabbil.com/blog.html?year=2024&month=july";
    let myUrlObject = url.parse(myUrl, true); // break the URL using parse() method;

    // URL MODULE
    let myHostName = myUrlObject.host;
    let myPathName = myUrlObject.pathname;
    let mySearch = myUrlObject.search;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(mySearch);
    res.end();

});

server.listen(5050);
console.log("Server Started...");