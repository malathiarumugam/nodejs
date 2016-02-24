var http = require('http');
var port = 8082;
var host = "0.0.0.0";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var d = new Date();
  
  res.end('Hello World\n This is Sample nodejs Application' +d.toString());
}).listen(port,host);
console.log('Server running at http://0.0.0.0:8082/');

