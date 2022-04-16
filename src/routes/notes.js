const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/notes/add', (req, res) => {
   res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) => {
  const {title, description} = req.body;
  const errors = [];
  if(!title) {
    errors.push({text: 'Please Write a Title'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }
  if(errors.lenght > 0) {
  res.render('notes/new-notes', {
    errors,
    title,
    description
  });
  
  } else {
  res.send('ok');
  }
});

router.get('/notes', (req, res) =>{
  res.send('Notes from database');

});

module.exports = router;

