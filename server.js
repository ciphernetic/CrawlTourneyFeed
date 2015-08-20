var express = require('express');
var app = express();
var port = 80;

app.use(express.static(__dirname + "/Web"));

app.listen(port);
console.log("Server running on port " + port);