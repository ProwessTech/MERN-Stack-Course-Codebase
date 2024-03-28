import http from "http";


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'Application/json' })

    res.end(JSON.stringify({
        data: "Hello World"
    }));
    
});



server.listen(5000, () => {
    console.log("Server is running in http://localhost:5000");
});

