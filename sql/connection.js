const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "database-1.cg5jx2izu82w.us-east-2.rds.amazonaws.com",
        user: "dvizueta",
        password: "Ranger1985!",
        database: "test",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
