const sequelize = require('../config/connection.js');
const seedMenu = require('./menu-seed');
const seedProtein = require('./protein-seed');

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedMenu();
  console.log('\n----- MENU SEEDED -----\n');

  await seedProtein();
  console.log('\n----- PROTEINS SEEDED -----\n');

  process.exit(0);
};

seedAll();
