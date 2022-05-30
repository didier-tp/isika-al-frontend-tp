//var express = require('express');
import express from 'express';
//var exphbs = require('express-handlebars')
import exphbs from 'express-handlebars';

var app = express();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.static(__dirname+'/assets'))

app.get('/', function(req , res ) {
  res.redirect('/server-home');
});

app.get('/server-home', function(req , res ) {
   res.render('server-home');
    //rendering views/server-home.handlebars in the context of
    //views/layouts/main.handlebars
});

app.get('/calcul', function(req , res ) {
    res.render('calcul'); //views/calcul.handlebars
});

//GET addition?a=5&b=6
app.get('/addition', function(req , res ) {
    let va = Number(req.query.a);
    let vb = Number(req.query.b);
    let vaPlusVb = va+vb;
    res.render('addResult', {a: va, b: vb, resAdd: vaPlusVb });
    //rendering views/addResult.handlebars with js values 
    //for {{a}} , {{b}} , {{resAdd}}
});

app.listen(8282 , function () {
    console.log("http://localhost:8282");
});