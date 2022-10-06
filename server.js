const http = require('http');
const app = require('./app');
var fs = require('fs');

const port = process.env.PORT || 3000;
//localhost:3000
const server = http.createServer(app);



// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(port);
// });

server.listen(port);