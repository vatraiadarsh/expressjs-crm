var path=require('path');
var logger = require('morgan');
var express=require('express');
var cookieParser = require('cookie-parser');


module.exports=function(app){
    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery',express.static(path.join(__dirname, 'node_modules/jquery/dist/')));
app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));

};

