var http = require('http');
http.createServer(function(req, res) {
res.write('successfully');    
res.end('./index.html');
}).listen(8081);
