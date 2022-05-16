const {
  Protein
} = require('../models');

const proteinData = [{
  name: "carne asada",
  translated: "grilled steak"
},
  {
    name: "pollo",
    translated: "grilled chicken"
  },
  {
    name: "pastor",
    translated: "marinated pork"
  },
  {
    name: "barbacoa",
    translated: "braised beef"
  },
  {
    name: "cecina",
    translated: "cured salted beef"
  },
  {
    name: "chorizo",
    translated: "mexican sausage"
  },
  {
    name: "carnitas",
    translated: "braised pork"
  },
  {
    name: "tripa",
    translated: "tripe",
    extra: "+ $"
  },
  {
    name: "lengua",
    translated: "beef tongue",
    extra: "+ $"
  },



]

const seedProtein = () => Protein.bulkCreate(proteinData);

module.exports = seedProtein;