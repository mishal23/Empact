var express = require('express');
var router = express.Router();
var path = require('path');
var base64Img = require('base64-img');

/* Save image to public folder */
router.post('/', function(req, res, next) {
  
  // print the body in the request;
  console.log(req.body);

  // convert the base64 image to image and save in ./public/images directory
  base64Img.img(req.body.imgBase64, './public/images', '1', function(err, filepath) {
  	res.send("image saved successfully");
  });

});

module.exports = router;