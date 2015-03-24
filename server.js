var express = require('express');
var app = express();
app.use(express.static('./public'))
    .get('*',function(req,res){
        res.sendfile(__dirname +'/public/main.html');
    }).listen(9000);
console.log("The server is running on port 9000");