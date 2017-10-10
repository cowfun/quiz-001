const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const kx = require('../db/connection');

router.get('/', function (request, response) {
  kx
    .select()
    .from("clucks")
    .orderBy('created_at', 'DESC')
    .then((clucks)=>{
      response.render('index',{clucks})
    });
});

module.exports = router;
