var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

// need to add app code
// var HTML = 

app.get('/', function(req,res) {
	res.send("some text or html can be sent.");
});

app.listen(PORT, function(){
	console.log("Server is listening on " + PORT);
});