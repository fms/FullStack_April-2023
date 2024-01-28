import http from 'http';
import fs from 'fs';
import url from 'url';

const port = 3000;

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let contentType = 'text/plain';

    if (q.pathname === '/') {
        sendFile(res, 'index.html', 'text/html');
    } else if (q.pathname === '/style.css') {
        sendFile(res, 'style.css', 'text/css');
    } else if (q.pathname === '/data.js') {
        sendFile(res, 'data.js', 'text/js');
    }

    function sendFile(response, filename, type) {
        fs.readFile(filename, (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end(err.toString());
            } else {
                response.writeHead(200, { 'Content-Type': type });
                response.end(data);
            }
        });
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});