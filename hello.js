/*nodeJS*/
/*------*/

var http = require('http'); //include http module
var url = require('url'); //include URL module

var server = http.createServer(function (request, response) {
	var parthname = url.parse(request.url).pathname;
	var url_parts = url.parse(request.url, true);
	console.log("");

	response.writeHead(200, {"Content-Type": "text/html"} ) //200 means it worked, OK. 	//key : value
	response.write("<!DOCTYPE html>");
	response.end("<h1>Hello World</h1>"); 
});

server.listen(8888); //server listens on this port

console.log("Server running on http://127.0.0.1:8888"); //write to command line