var mysql = require('mysql2');
const env = process.env;

var con = mysql.createConnection({
  host: `${env.DB_HOST}`,
  user: `${env.DB_USER}`,
  password: `${env.DB_PASS}`,
  database: `${env.MYSQL_DB}`
});
con.connect(function(err) {
  if (err){
    console.log('connection Error',err)
  }else{
    console.log("Connected!");
  }
});
const pool = mysql.createPool({
    connectionLimit: process.env.CONNECTION_LIMIT,    // the number of connections node.js will hold open to our database
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});
let dbQuery = {};
dbQuery.insertUser = (name, email, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO users (name, email, password,confirmPassword) VALUES (?,  ?, ? , ?)', [name, email, password, confirmPassword], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result.insertId);
        });
    });
};
dbQuery.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM users WHERE email = ?', [email], (error, result) => {
          if (error) {
              return reject(error);
          }
          
          return resolve(result[0]);
      });
  });
};
module.exports = dbQuery;
