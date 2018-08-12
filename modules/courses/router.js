var express = require('express');
var router = express.Router();

var CourseController = require('./coursesController');
var controller = new CourseController();

/* GET users listing. */
router.get('/', function(req, res) {
  controller.index(req,res);
});
  
router.get('/json', function(req, res) {
  controller.json(req,res);
});
  
router.get('/add', function(req, res) {
    controller.add(req,res);
  });
   
  
module.exports = router;
