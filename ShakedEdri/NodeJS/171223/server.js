// express, nodemon must be installed first
// cd shakededri/nodejs/171223
// npm run dev

import http from 'http';
import fs from 'fs';
import url from 'url';

const port = 3000;

http.createServer(function (req, res) {
    const q = url.parse(req.url);

    // option 1:
    // if (q.pathname == "/") {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/html'
    //     });
    //     fs.readFile('index.html', function (err, data) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         res.write(data);
    //         return res.end();
    //     });
    // } else if (q.pathname == '/data.js') {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/javascript'
    //     });
    //     fs.readFile('data.js', function (err, data) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         res.write(data);
    //         return res.end();
    //     });
    // } else if (q.pathname == '/style.css') {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/css'
    //     });
    //     fs.readFile('style.css', function (err, data) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         res.write(data);
    //         return res.end();
    //     });
    // }

    // option 2 :
    // let filename = '';
    // let portnum = 0;
    // let type = '';

    // switch (q.pathname) {
    //     case '/':
    //         portnum += 200;
    //         filename += 'index.html';
    //         type += 'text/html';
    //         break;
    //     case '/data.js':
    //         portnum += 200;
    //         filename += 'data.js';
    //         type += 'text/js';
    //         break;
    //     case '/style.css':
    //         portnum += 200;
    //         filename += 'style.css';
    //         type += 'text/css';
    //         break;
    //     default:
    //         portnum += 404;
    //         type += 'text/html';
    //         filename += 'errorpage.html';
    // }

    // res.writeHead(portnum, {
    //     'Content-Type': type
    // });

    // fs.readFile(filename, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.write(data);
    //     return res.end();
    // });

    // option 3 
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
                errorPage();
            } else {
                response.writeHead(200, {
                    'Content-Type': type
                });
                response.end(data);
            }
        });

        function errorPage() {
            fs.readFile('errorpage.html', function (err, data) {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(err.toString());
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    return res.end(data);
                }
            });
        }
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});