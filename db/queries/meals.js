const db = require("../connection");

const getMeals = () => {
  const queryString = `SELECT meals.*`;
  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error("Error in retrieving meals");
      throw error;
    });
};

module.exports = { getMeals }