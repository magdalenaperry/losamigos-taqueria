const router = require('express').Router();

const {
  Menu
} = require('../models');
const Protein = require('../models/protein');

const serialize = require('../utils/serialize');

// homepage
router.get('/', async (req, res) => {
  try {

    console.log('hello world')

    res.render('homepage', {
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// menu page
router.get('/menu', async (req, res) => {
  try {
    const menuData = await Menu.findAll({});
    const proteinData = await Protein.findAll({});

    const menu = serialize(menuData);
    const protein = serialize(proteinData);
    
    res.render('menu', {menu, protein});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// contact page
router.get('/contact', async (req, res) => {
  try {
    // const menuData = await .findAll({});
    // const proteinData = await Protein.findAll({});

    // const menu = serialize(menuData);
    // const protein = serialize(proteinData);

    res.render('contact');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;