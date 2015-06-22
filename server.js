var express = require('express');
var app = express();
var api = require(__dirname +'/public/api');

app.use(express.static('./public'))
    .use('/api',api)
    .get('*',function(req,res){
        res.sendfile(__dirname +'/public/main.html');
    }).listen(9000);
console.log("The server is running on port 9000");