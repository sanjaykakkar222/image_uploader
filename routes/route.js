
var express=require('express');
var route=express.Router();
const mongoose = require('mongoose');

var Image=require('../model/imageschema');
var fs = require('fs');
var randomStringGenerator = require("randomstring");
const busyboy = require('busboy');


route.post('/image', (req, res) => {
    var busboy = new busyboy({ headers: req.headers });
    var name;
    var saveTo;
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
         name = randomStringGenerator;
         saveTo = './imgsave/' + name;
        file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function () {
        let newImage = new Image();
        newImage.img_name =name;
        newImage.img_path =saveTo;
        newImage.save((err, users) => {
            if (err) {
                res.send(err)
                //return;
            } else {
                res.send("file uploaded");
            }
        })
        
    });


    return req.pipe(busboy);
})



  
module.exports=route;