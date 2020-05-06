var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste');
const fornecedor = require('./routes/fornecedor');
const produto = require('./routes/produto');
const cliente = require('./routes/cliente');
const venda = require('./routes/venda');

var app = express();
const db = require('./config/database');
db('mongodb://localhost:27017/progWeb');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teste', testeRouter);
app.use('/fornecedor', fornecedor);
app.use('/produto', produto);
app.use('/cliente', cliente);
app.use('/venda', venda);

module.exports = app;
