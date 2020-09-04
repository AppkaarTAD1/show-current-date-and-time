var http = require('http');
var dt= require('./creatingmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("currently date and time are:" + dt.myDateandTime());
    res.end();
}).listen(8080);
