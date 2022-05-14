const {
  Protein
} = require('../models');

const proteinData = [{
    name: "carne asada",
    translated: "grilled steak"
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

const seedProtein = () => Protein.bulkCreate(proteinData);

module.exports = seedProtein;