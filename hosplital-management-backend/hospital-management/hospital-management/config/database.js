import { Sequelize } from 'sequelize';

// MySQL database connection with Sequelize
// const sequelize = new Sequelize("hospital", "username", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("hospital", "root", "Blackops2@", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;