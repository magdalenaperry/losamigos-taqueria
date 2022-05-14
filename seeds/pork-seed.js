const {
  Pork
} = require('../models');

const porkData = [{
  name: "chorizo",
  translated: ""
},
{
  name: "chuleta",
  translated: ""
},
{
  name: "costilla",
  translated: ""
},
{
  name: "maciza",
  translated: ""
},
{
  name: "pata",
  translated: ""
},
{
  name: "espinazo",
  translated: ""
},
{
  name: "carnitas",
  translated: "",
},
{
  name: "cuero",
  translated: "",
},
  {
    name: "chicharron",
    translated: ""
  },
  {
    name: "boston",
    translated: ""
  },
  {
    name: "chuleta ahumada",
    translated: ""
  },
  {
    name: "jamon",
    translated: "",
  },
  {
    name: "queso puerco",
    translated: "",
  },
  {
    name: "salchichas",
    translated: ""
  },
  {
    name: "orejas",
    translated: ""
  },
  {
    name: "patas y orejas en vinagre",
    translated: ""
  },
  {
    name: "cueritos en vinagre",
    translated: ""
  },
  {
    name: "pastor",
    translated: "",
  },
  {
    name: "costilla preparada",
    translated: "",
  },


]

const seedPork = () => Pork.bulkCreate(porkData);

module.exports = seedPork;