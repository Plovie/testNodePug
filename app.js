

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movie = require('./app_server/controllers/users');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//allow everybody to make request
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");// allow all type of content
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS', 'PATCH');// allow all of this path
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    movie.getAll(req, res);
});

app.get('/users',(req, res) =>{
    console.log('get all');
    movie.getAll(req, res);
});

app.get('/users/:id', (req, res) => {
    console.log('get one by id');
    movie.getOne(req, res);
});

app.post('/users', (req, res) => {
    console.log('create users');
    movie.create(req,res);
});

app.patch('/users/:id', (req, res) => {
    console.log('patch movie');
    movie.update(req,res);
});

app.put('/users/:id', (req, res) => {
    console.log('replace movie')
    movie.replace(req,res);
});

app.delete('/users/:id', (req, res) => {
    console.log('delete movie')
    movie.delete(req,res);
});

app.listen(3000);