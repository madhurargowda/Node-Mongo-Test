const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// GET /person – list all people
router.get('/person', async (req, res) => {
  const people = await Person.find();
  res.render('list', { people });
});

// POST /person – form to add person
router.get('/person/add', (req, res) => {
  res.render('add');
});

router.post('/person', async (req, res) => {
  await Person.create(req.body);
  res.redirect('/person');
});

// PUT /person/:id – edit form
router.get('/person/edit/:id', async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render('edit', { person });
});

router.post('/person/update/:id', async (req, res) => {
  await Person.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/person');
});

// DELETE /person/:id
router.get('/person/delete/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.redirect('/person');
});

module.exports = router;
