const http = require("http");
const port = 3000; // Enter any port you would like to listen to
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type" : "text/html" }); // Gives a response header, which is used to give more detail about the response
        fs.readFile("../index.html", (error, data) => { // Change to location of your html file
            if (error) {
                res.writeHead(404);
                res.write("Error: File not found");
            } else {
                res.write(data);
            }
            res.end();
        });
    }else if (req.url.match(/.css$/)) {
        let cssPath = path.join(path.resolve(__dirname, "../"), req.url); // Find your CSS path. req.url should give you /css/filename.css if it exists inside a folder called css. 
        let fileStream = fs.createReadStream(cssPath); // creates a stream from where we can read our file
        res.writeHead(200, {"Content-Type" : "text/css"});
        fileStream.pipe(res);
    }else if (req.url.match(/.js$/)) {
        let jsPath = path.join(path.resolve(__dirname, "../"), req.url); // Find your js path. Same as finding your css path 
        let fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, {"Content-Type" : "text/javascript"});
        fileStream.pipe(res);
    }
});


server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("Server listening on port " + port);
    }
});
