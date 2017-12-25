var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

router.get('/', book_controller.index);

roter.get('/book/create', book_conroller)