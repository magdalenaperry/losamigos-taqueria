const {
  Beef
} = require('../models');

const beefData = [{
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

const seedBeef = () => Beef.bulkCreate(beefData);

module.exports = seedBeef;