const {
  Pork
} = require('../models');

const porkData = [{
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
  name: "",
  translated: "",
},


]

const seedPork = () => Pork.bulkCreate(porkData);

module.exports = seedPork;