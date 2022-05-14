const {
  Chicken
} = require('../models');

const chickenData = [{
  name: "milanesa",
  translated: "grilled steak"
},
  {
    name: "pechuga entera",
    translated: ""
  },
  {
    name: "pierna",
    translated: ""
  },
  {
    name: "muslo",
    translated: "chicken thighs"
  },
  {
    name: "alitas",
    translated: "",
  },
  {
    name: "alitas preparadas",
    translated: "",
  },
  {
    name: "pata",
    translated: ""
  },
  {
    name: "huilotas",
    translated: ""
  },
  {
    name: "pollo a la naranja",
    translated: ""
  },
  {
    name: "molleja",
    translated: ""
  },
  {
    name: "bistec",
    translated: "",
  },
  {
    name: "entero",
    translated: "",
  },
  {
    name: "molido",
    translated: ""
  },



]

const seedChicken = () => Chicken.bulkCreate(chickenData);

module.exports = seedChicken;