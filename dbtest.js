//Esteban Amas, eea4ue, cs4720 HW4

// Include http and mysql module 
var http = require('http'),
    mysql = require('mysql');

// Create the connection
var connection = mysql.createConnection({
    host: "stardock.cs.virginia.edu",
    user: "cs4720eea4ue",
    password: "spring2014",
    database: "cs4720eea4ue"
});

// Create the http server.
http.createServer(function (request, response) {
    // Query the database. 
    connection.query('SELECT * FROM musicData;', function (error, rows, fields) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        // Send data as JSON string. Rows variable holds the result of the query. 
        response.write(JSON.stringify(rows));
        response.end();
    });
// Listen on the 8888 port. 
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");