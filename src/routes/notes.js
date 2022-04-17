const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const {body, validationResult} = require('express-validator');



router.get('/notes/add', (req, res) => {
   res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) => {
  const {title, description }= req.body;
   const errors = [];
   if(!title) {
      errors.push({text: 'Please Write a Title'});
   }
   if(!description) {
     errors.push({text: 'Please Write a Tescription'});
   }
   if(errors.length >= 0) {
     res.render('notes/new-notes', {
       errors,
       title,
       description 
     });
   } else {
     
   }
});


router.get('/notes', (req, res) =>{
  res.send('Notes from database');

});

module.exports = router;

