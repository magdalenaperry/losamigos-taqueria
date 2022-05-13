const sequelize = require('../config/connection.js');
const seedMenu = require('./menu-seed');
const seedProtein = require('./protein-seed');
const seedPork = require('./pork-seed');
const seedChicken = require('./chicken-seed');
const seedBeef = require('./beef-seed');
const seedSeafood = require('./seafood-seed')

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedMenu();
  console.log('\n----- MENU SEEDED -----\n');

  await seedProtein();
  console.log('\n----- PROTEINS SEEDED -----\n');

  await seedPork();
  console.log('\n----- PROTEINS SEEDED -----\n');

  await seedChicken();
  console.log('\n----- PROTEINS SEEDED -----\n');

  await seedBeef();
  console.log('\n----- PROTEINS SEEDED -----\n');

  await seedSeafood();
  console.log('\n----- PROTEINS SEEDED -----\n');

  process.exit(0);
};

seedAll();
