const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

router.get('/users/signin', (req, res) => {
  res.render('users/signin');
})

router.get('/users/signup', (req, res) =>{
  res.render('users/signup');


});

module.exports = router;
