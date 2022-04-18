const {
  Menu
} = require('../models');

const menuData = [{
    name: "tacos",
    image: "https://via.placeholder.com/150",
    description: "Four hand-made, soft, corn tortillas filled with choice of protein, topped with cilantro, and onions."
  },
  {
    name: "sopes",
    image: "https://via.placeholder.com/150",
    description: "Three thick corn tortillas topped with beans choice of protein, lettuce, sour cream, and queso fresco."
  },
  {
    name: "burritos",
    image: "https://via.placeholder.com/150",
    description: "12 in. flour tortilla stuffed with rice, beans, choice of protein, cheese, onions, and cilantro."
  },
  {
    name: "flautas",
    image: "https://via.placeholder.com/150",
    description: "Four hand-made, fried corn tortillas rolled and filled with shredded chicken. Topped with sour cream and queso fresco.Served with lettuce, and tomatoes."
  },
  {
    name: "gorditas",
    image: "https://via.placeholder.com/150",
    description: "Three thick corn tortillas fried and filled with chicharron (fried pork skins in green sauce), or choice of protein, lettuce, sour cream, and queso fresco."
  },
  {
    name: "quesadillas",
    image: "https://via.placeholder.com/150",
    description: "12 in. flour tortilla grilled with choice of protein and cheese. Served with lettuce, tomatoes, and sour cream."
  },
  {
    name: "enchiladas",
    image: "https://via.placeholder.com/150",
    description: "Four hand-made, soft, corn tortillas rolled and filled with queso fresco and slathered in a green tomatillo sauce.Topped with queso, served with cecina, lettuce, sour cream, avocado, and red onion."
  },
  {
    name: "tortas",
    image: "https://via.placeholder.com/150",
    description: " Mexican sandwich made with telera bread, mayo, choice of protein, lettuce, avocado,queso fresco, tomatoes, onions, and jalapeños.",
    specialtyName1: "Cubana", 
    specialtyDesc1: "Specialty torta with three proteins: chicken milanese, hotdogs, and ham.",
    specialtyName2: "Milanesa", 
    specialtyDesc2: "Specialty torta made with breaded chicken or steak milanese.",
    specialtyName3: "Pambazo",
    specialtyDesc3: "Specialty torta made with telera bread, sautéed in a red sauce and filled with seasoned potatoes, chorizo, lettuce, avocado, queso fresco, tomatoes, onions, and jalapeños."

  },



]

const seedMenu = () => Menu.bulkCreate(menuData);

module.exports = seedMenu;