const {
  Seafood
} = require('../models');

const seafoodData = [{
  name: "carne asada",
  translated: "grilled steak"
},
{
  name: "",
  translated: ""
},
{
  name: "barbacoa",
  translated: "braised beef"
},
{
  name: "",
  translated: ""
},
{
  name: "",
  translated: ""
},
{
  name: "",
  translated: ""
},
{
  name: "",
  translated: "",
},
{
  name: "lengua",
  translated: "beef tongue",
},


]

const seedSeafood = () => Seafood.bulkCreate(seafoodData);

module.exports = seedSeafood;