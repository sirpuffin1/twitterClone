const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

class Database {
  constructor() {
    this.connect();
    
  }

  connect() {
    mongoose
      .connect(
        process.env.MONGO_URL
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.log("Database connection error " + err);
      });
  }
}

module.exports = new Database();
