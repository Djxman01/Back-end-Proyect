const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/notes', (req, res) =>{
  res.send('Notes from database');

});

module.exports = router;
