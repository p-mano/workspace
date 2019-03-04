var express = require('express');
var router = express.Router();
var dataService = require('../service/dataservice.js');
var dbService = require('../service/dbservice.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//get all customer
router.get('/customers', function(req, res, next) {
  var callback=function(records){
    res.send(records);
  }
  dbService.getCustomers(callback);
});

//get customer by index
// /customers/1
router.get('/customers/:id', function(req, res, next) {
  console.log("update-user >>"+req.params.id);
  var callback = function(result){
    res.send(result);
  }
  dbService.getCustomersById(req.params.id,callback);
  
});
router.post('/customers', function(req, res) {
    req.accepts('application/json');
    var callback = function(result){
      res.send(result);
    }
    dbService.addCustomer(req.body,callback);
});
router.put('/customers', function(req, res) {
    req.accepts('application/json');
    var callback = function(result){
      res.send(result);
    }
    dbService.editCustomers(req.body, callback);
});
router.delete('/customers/:id', function(req, res) {
    var callback = function(result){
      res.send(result);
    } 
    dbService.deleteCustomer(req.params.id,callback);
});

router.post('/authenticate', function(req, res, next) {
    req.accepts('application/json');
    var data=req.body;
    if(data.username == data.password){
      //create session
      res.send("success");
    }else{
      res.send("fail");
    }
});
module.exports = router;
