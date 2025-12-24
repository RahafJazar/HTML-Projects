const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/events") {

        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": "*"
        });

        let counter = 1;

        setInterval(() => {
            res.write(`data: رسالة رقم ${counter}\n\n`);
            counter++;
        }, 1000);

    }

}).listen(3000);

console.log("SSE Server running on http://localhost:3000/events");