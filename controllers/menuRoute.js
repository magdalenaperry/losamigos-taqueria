const router = require('express').Router();
// const withAuth = require('../utils/auth');
const {
  Menu
} = require('../models')

const serialize = require('../utils/serialize');

router.get('/menu', async (req, res) => {
  try {
    const menuData = await Menu.findAll({});
    console.log('hello menu')
    const menu = serialize(menuData);
    res.render('menu', menu );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;