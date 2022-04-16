const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

router.get('/users/signin', (req, res) => {
  res.send('Entering the app');
})

router.get('/users/signup', (req, res) =>{
  res.send('Authentication Form');


});

module.exports = router;
