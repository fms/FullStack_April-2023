import http from 'http';
import fs from 'fs';
// import {myDateTime} from './date'

const portNum = 3000

http.createServer(function(req, res){
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });}).listen(portNum);
