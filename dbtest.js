// Include http module, 
var http = require('http'),
// And mysql module you've just installed. 
    mysql = require("mysql");

// Create the connection. 
// Data is default to new mysql installation and should be changed according to your configuration. 
var connection = mysql.createConnection({
    host: "stardock.cs.virginia.edu",
    user: "cs4720mss2x",
    password: "password",
    database: "cs4720mss2x"
});

// Create the http server. 
http.createServer(function (request, response) {
    // Query the database. 
    connection.query('SELECT * FROM sections;', function (error, rows, fields) {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        // Send data as JSON string. 
        // Rows variable holds the result of the query. 
        response.write(JSON.stringify(rows));
        response.end();
    });

// Listen on the 8888 port. 
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");