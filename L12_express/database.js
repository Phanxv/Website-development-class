const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123@#456",
  database:"classicmodels",
  multipleStatements: true
});
connection.connect(function(err){
   if(!err){
       console.log("Connected");
   }else{
       console.log("Connection failed");
   }
});
module.exports = connection;