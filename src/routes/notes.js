const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const {body, validationResult} = require('express-validator');

const Note = require('../models/Note');
const req = require('express/lib/request');

router.get('/notes/add', (req, res) => {
   res.render('notes/new-note');
});

router.post('/notes/new-note', async (req, res) => {
  const {title, description }= req.body;
   const errors = [];
   if(!title) {
      errors.push({text: 'Please Write a Title'});
   }
   if(!description) {
     errors.push({text: 'Please Write a Description'});
   }
   if(errors.length > 0) {
     res.render('notes/new-note', {
       errors,
       title,
       description 
     });

   } else {
     const newNote = new Note({title, description});
     await newNote.save();
     res.redirect('/notes');
   }
});


router.get('/notes', async (req, res) =>{
  
const notes = await Note.find().lean();
res.render('notes/all-notes', {notes});  
console.log(req.params.id);
});





module.exports = router;

