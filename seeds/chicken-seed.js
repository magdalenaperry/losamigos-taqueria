const {
  Chicken
} = require('../models');

const chickenData = [{
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

const seedChicken = () => Chicken.bulkCreate(chickenData);

module.exports = seedChicken;