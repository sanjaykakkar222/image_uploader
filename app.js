var express = require('express');
var app = express();
 
// images
app.use('/upload', express.static(__dirname + '/uploads'));
 
//app.use(require('./apis'));
 
// Start web server at port 3000
var port = 3000;

app.use('/',function(req,res)
{

res.send('hello');

});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server start at http://%s:%s', host, port);
});