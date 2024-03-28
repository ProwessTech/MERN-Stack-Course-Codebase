import http from "http";
import url from "url";


const server = http.createServer((req, res) =>{
const parseUrl = url.parse(req.url, true);

if(parseUrl.pathname === "/" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Web Server Creation Successful!</h1>")
}

else if(parseUrl.pathname === "/home" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Home Page</h1>")
}
else if (parseUrl.pathname === "/about" && req.method === "GET")
{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>About Us</h1>");
}

else {
    res.writeHead(404,{"Content-Type": "text/html"} );
    res.end("<h1>Sorry! Page not found</h1>");
}

});

server.listen(5000, ()=>{
    console.log("Server is running successfully in http://localhost:5000");
});

