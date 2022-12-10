const { Users  } = require('..server/models');


const usersData = [
  {
    username: 'TomJ',
    firstName: "Tom",
    lastName: 'John',
    email: 'tom@gmail.com',
    password: tomjohn,
    isAdmin: false
  },
  {
    username: 'MaryA',
    firstName: "Mary",
    lastName: 'Ann',
    email: 'mary@gmail.com',
    password: maryann,
    isAdmin: true
  },
  
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
