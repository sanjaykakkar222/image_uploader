
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


app.post(('/img64'), (req, res) => {
    var base64Data = req.body.image.replace(/^data:image\/(?:jpeg|jpg|JPEG|JPG|png|PNG);base64,/, "");
    let extension;
     if(lowerCaseData.indexOf('png') !== -1){
            extension = '.png'
        }else if(lowerCaseData.indexOf('jpg') !== -1){
            extension = '.jpg'
        }else if(lowerCaseData.indexOf('jpeg') !== -1){
            extension = '.jpeg'
        };
    fs.writeFile("uploads_image/" + filename + extension, base64Data, 'base64', function (err) {
          let newImage = new schema();
        newImage.name =name;
        newImage.path =saveTo;
        newImage.save((err, users) => {
            if (err) {
                res.send(err)
                return;
            } else {
                res.end("file uploaded");
            }
        })
        if (err) {
            console.log(err);
        }
    });
})



  
module.exports=route;
