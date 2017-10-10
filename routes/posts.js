const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const kx = require('../db/connection');

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})


router.get('/', function (request, response) {
  response.render('posts/index')
  kx
    .select()
    .from('clucks')
    .then((posts)=>{
      res.render('posts/index',{posts})
    });
});

router.post('/', upload.single('photo'), function (request, response) {
  const {username, content} = request.body;
  const {filename} = request.file;
  kx
    .insert({username: username, content: content, photo_path: `/uploads/${filename}`})
    .into('clucks')
    .then(()=>res.redirect('/'));
});

module.exports = router;
