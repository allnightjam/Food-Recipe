const express = require("express");
const app = express();
const db = require("../Food-Recipe/db/connection");
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/api/meals", (req, res) => {
  const queryString = `SELECT * FROM meals`;
  return db.query(queryString)
    .then(data => {
      const meals = data.rows;
      res.json(meals);
    })
    .catch(error => {
      console.error("Error in retrieving meals");
      res.status(500).json({error: "Internal Server Error"});
    });
});

app.get("/", (req, res) => {
  const queryString = `SELECT * FROM meals`;
  return db.query(queryString)
    .then(data => {
      const meals = data.rows;
      console.log("data:", meals)
      return res.render('index', {meals})
    })
    .catch(error => {
      console.error("Error in retrieving meals");
      throw error;
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});