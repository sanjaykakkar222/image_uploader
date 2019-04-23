const express = require('express');
const mongoose = require('mongoose');
var fs = require('fs');
const busyboy = require('busboy');

var app=express();//using express method


var route=require('./routes/route');


//connect to monodb

mongoose.connect('mongodb://localhost:27017/image_application')




mongoose.connection.on("connected",()=>{

    console.log("connected to databse mongodb @27017")
});


mongoose.connection.on("error",(err)=>{

    if(err)
    {

        console.log("error in database connection "+err);
    }
});
//port no

const port=3000;

//adding middleware-cors

//app.use(cors());

//body-parser

//app.use(bodyparser.json());

//routes
app.use('/api',route);
//listen server

app.get('/',(req,res)=>{

    res.send("foobar");
});


app.listen(port,()=>{

    console.log("server started at port "+port);
});