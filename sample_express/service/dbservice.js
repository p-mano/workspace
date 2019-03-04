var mysql      = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : '123456',
    port : 3306, //port mysql
    database:'nodejs',
    connectionLimit: 10,
    supportBigNumbers: true
});
var customerService= {};
customerService.getCustomers = function(callback){
  var sql = "SELECT * FROM customer";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback({}); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback({}); return; }
      callback(results);
    });
  });
};

customerService.addCustomer = function(customer,callback) {
        console.log(JSON.stringify(customer));
        pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback("fail"); return; }
        connection.query("INSERT INTO customer set ? ",customer, function(err, results) {
          if(err){
           console.log("Error Selecting : %s ",err );
           callback("fail");
          }else{
           callback("success");
         }
      });
    });
};

customerService.deleteCustomer = function(id,callback){
    var sql = "delete FROM customer where id='"+id+"'";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback("fail"); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback("fail"); return; }
      callback("success");
    });
  });
};

customerService.getCustomersById = function(id,callback){
	var record = {};
  var sql = "SELECT * FROM customer where id='"+id+"'";
  console.log("sql:"+sql);
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback({}); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback({}); return; }
      if(results.length ==0){
        callback(record);
      }
      callback(results[0]);
    });
  });

};
customerService.editCustomers = function(customer,callback){
         pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback("fail"); return; }
        connection.query("UPDATE customer set ? WHERE id = ? ",[customer,customer.id], function(err, results) {
          if(err){
           console.log("Error Selecting : %s ",err );
           callback("fail");
          }else{
           callback("success");
         }
      });
    });
};

module.exports = customerService;