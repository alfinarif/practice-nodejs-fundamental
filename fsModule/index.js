const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{

    if (req.url == "/"){

        // *** Check if File Exists using Asynchronous ***
        fs.exists('demo.txt', (result)=>{
            if (result){
                res.end("File Exists");
            }else {
                res.end("File not Exists");
            }
        })



        // *** Check if File Exists using Synchronous ***
        // let result = fs.existsSync('demo1.txt'); // its return -> true
        // if (result){
        //     res.end("File Exists");
        // }else {
        //     res.end("File not Exists");
        // }



        // *** Delete File using Asynchronous ***
        // fs.unlink('demo_new_async.txt', (error)=>{
        //     if (error){
        //         res.writeHead(500, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:red'>Internal server error</h2>");
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:green'>File deleted successfully</h2>");
        //         res.end();
        //     }
        // })



        // *** Delete File using Synchronous ***
        // let error = fs.unlinkSync('demo_new_sync.txt');
        // if (error){
        //     res.writeHead(500, {'Content-Type': 'text/html'});
        //     res.write("<h2 style='color:red'>Internal server error</h2>");
        //     res.end();
        // }else {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write("<h2 style='color:green'>File deleted successfully</h2>");
        //     res.end();
        // }



        // *** File rename using Asynchronous ***
        // fs.rename('demo_async.txt', 'demo_new_async.txt', (error)=>{
        //     if (error){
        //         res.writeHead(500, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:red'>Internal server error</h2>");
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:green'>File renamed successfully</h2>");
        //         res.end();
        //     }
        // })




        // *** File rename using Synchronous ***
        // let err = fs.renameSync('demo_new_new_sync.txt', 'demo_new_sync.txt');
        // if (err){
        //     res.writeHead(500, {'Content-Type': 'text/html'});
        //     res.write("<h2 style='color:red'>Internal server error</h2>");
        //     res.end();
        // }else {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write("<h2 style='color:green'>File renamed successfully</h2>");
        //     res.end();
        // }



        // *** write/created new file using Asynchronous ***
        // fs.writeFile('demo.txt', 'Hello world new data', (err, data)=>{
        //     if (err){
        //         res.writeHead(500, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:red'>Internal server error</h2>");
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write("<h2 style='color:green'>File created successfully</h2>");
        //         res.end();
        //     }
        // })


        // *** write/created new file using Synchronous ***
        // let error = fs.writeFileSync('demo_sync.txt', 'created new file using synchronous system!');
        // if (error){
        //     res.writeHead(500, {'Content-Type': 'text/html'});
        //     res.write("Internal server error");
        //     res.end();
        // }else {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write("New file created using Synchronous");
        //     res.end();
        // }


        //*** read file using Asynchronous ***
        // fs.readFile('index.html', (err, data)=>{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });


        //*** read file using Synchronous ***
        // let myData = fs.readFileSync('index.html');
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(myData);
        // res.end();



    } // end if statement

}); // end server block

server.listen(5050);
console.log("Server is run on port 5050");