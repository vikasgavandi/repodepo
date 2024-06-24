const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.end("<h1>Welcome to our home page</h1>");;
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`<h1>Here is the about page</h1> 
        <a href="/"> back to home</a>`);
        return;
    } else {
        res.statusCode = 404;
             
        res.end (`<h1>OOPS</h1>
        <p>URL Not found</p> 
        <a href="/"> back to home</a>`
        );
    }
    console.log('server is running');

})


server.listen(3000);