const {
  Beef
} = require('../models');

const beefData = [{
  name: "ranchera",
  translated: ""
},
{
  name: "diezmillo",
  translated: ""
},
{
  name: "bistec bola",
  translated: ""
},
{
  name: "cecina",
  translated: ""
},
{
  name: "costilla para asar",
  translated: ""
},
{
  name: "costilla para caldo",
  translated: ""
},
{
  name: "chuleta",
  translated: "",
},
{
  name: "milanesa",
  translated: "",
},
{
  name: "chamorro",
  translated: ""
},
{
  name: "lengua",
  translated: ""
},
{
  name: "higado",
  translated: ""
},
{
  name: "pata",
  translated: ""
},
{
  name: "panal",
  translated: ""
},
{
  name: "librillo",
  translated: "",
},
{
  name: "callo",
  translated: "",
},
{
  name: "tripa",
  translated: ""
},
{
  name: "suadero",
  translated: ""
},
{
  name: "tendones",
  translated: ""
},
{
  name: "cola de res",
  translated: ""
},
{
  name: "barbacoa",
  translated: "",
},
{
  name: "bistec picado",
  translated: "",
},
  {
    name: "carne molida",
    translated: ""
  },
  {
    name: "cabeza",
    translated: ""
  },
  {
    name: "cachete",
    translated: ""
  },
 


]

const seedBeef = () => Beef.bulkCreate(beefData);

module.exports = seedBeef;