const express = require('express');
const fs = require('fs');
const app = express();
const port = 5400;
const v =require('./verif');

//getting the html fils by using the "fs" function readfile 
app.get('/',v,(req,res)=>{
    fs.readFile('./Home.html',v,'utf-8',(err,data)=>{
    err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.get('/Home.html',v,(req,res)=>{
    fs.readFile('./Home.html','utf-8',(err,data)=>{
    err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.get('/Contact.html',v,(req,res)=>{
    fs.readFile('./Contact.html','utf-8',(err,data)=>{
    err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.get('/Services.html',v,(req,res)=>{
    fs.readFile('./Services.html','utf-8',(err,data)=>{
    err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.listen(port,(req,res)=>{
    console.log(`server is running on port :${port}`)
})



