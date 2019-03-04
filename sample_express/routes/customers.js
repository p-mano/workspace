var express = require('express');
var router = express.Router();
var dataService = require('../service/dataservice.js');
var dbService = require('../service/dbservice.js');

router.get('/', function(req, res, next) {
	var callback = function(records){
		res.render('customers', { title: 'Customers',data:records });
	}
	dbService.getCustomers(callback);
});

router.get('/name/:search', function(req, res, next) {
  res.render('customers', { title: 'Customers',data:dataService.getCustomersByName() });
});

router.get('/add', function(req, res, next) {
	res.render('addcustomer', { title: 'Add Customer' });
});
router.get('/edit/:id', function(req, res, next) {
	var callback = function(record){
		res.render('editcustomer', { title: 'Edit Customer', record:record});
	}
	dbService.getCustomersById(req.params.id,callback);
	console.log("update-user >>"+req.params.id);
	
});

module.exports = router;
