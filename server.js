//Initialize tools

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));

//handle html form

app.get('/', function(req, res){
  console.log('default');
  res.sendFile('/client/index.html');
  res.end();
});

//Handle the customers name

app.get('/hill', function(req, res){
  res.end('Hill');
});

//Posting my response to the customer

app.post('/formhandler', function(req, res){
  var fs = require('fs');
  var wstream = fs.createWriteStream('customers.txt');
  //wstream.write(req.body.fname);
  fs.appendFile('customers.txt', req.body.fname);
  wstream.end();
  res.end("Thank you for your input " + req.body.fname);
  
 
});




//Listening for ports (this should always be included)

app.listen(process.env.PORT, process.env.HOST, function(){
  console.log("listening");
});
