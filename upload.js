var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    busboy = require('connect-busboy');
 
router.use(busboy());
 
router.post('/', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        var filePath = path.join(__dirname, '/../upload/', filename);
        fstream = fs.createWriteStream(filePath);
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log('Files saved');
            });
        });
    });

 