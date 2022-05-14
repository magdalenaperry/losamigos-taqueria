const router = require('express').Router();

const {
  Menu, Protein, Pork, Chicken, Beef, Seafood
} = require('../models');

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
    // console.log(menu)
    
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


router.get('/carniceria', async (req, res) => {
  try {
    const beefData = await Beef.findAll({});
    const chickenData = await Chicken.findAll({});
    const porkData = await Pork.findAll({});
    const seafoodData = await Seafood.findAll({});

    const beef = serialize(beefData);
    const chicken = serialize(chickenData);
    const pork = serialize(porkData);
    const seafood = serialize(seafoodData);

    res.render('carniceria', {beef, chicken, pork, seafood});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;