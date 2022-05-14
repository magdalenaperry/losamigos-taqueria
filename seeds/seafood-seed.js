const {
  Seafood
} = require('../models');

const seafoodData = [{
  name: "jaiva",
  translated: ""
},
{
  name: "seafood mix",
  translated: ""
},
{
  name: "bagre",
  translated: ""
},
{
  name: "camaron",
  translated: ""
},
{
  name: "mojarra",
  translated: ""
},
{
  name: "filete de mojarra",
  translated: ""
},
{
  name: "pulpo",
  translated: "",
},
{
  name: "tilapia",
  translated: "",
},
  {
    name: "camaron precocido",
    translated: ""
  },
  {
    name: "camaron pelado",
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

const seedSeafood = () => Seafood.bulkCreate(seafoodData);

module.exports = seedSeafood;