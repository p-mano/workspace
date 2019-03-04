
var customerList =[
{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'9724232340',address:'India'},
{id:2, name:'Akbar', email:'akbar@gmail.com', phone:'9724239940',address:'Delhi'},
{id:3,name:'Karan', email:'karan@gmail.com', phone:'8989898989',address:'Hyderabad'}
];

var customerService={};
customerService.addCustomer = function(record){
	record.id=customerList.length + 1;
    customerList.push(record);
};

customerService.deleteCustomer = function(id){
	var list = [];
    for (var i = 0; i < customerList.length; i++) {
    if(id != customerList[i].id ){
      	list.push(customerList[i]);
      }
    }
    customerList = list;
};
customerService.getCustomers = function(){
	return customerList;
};
customerService.getCustomersById = function(id){
	var record = {};
  	for (var i = 0; i < customerList.length; i++) {
    if(id == customerList[i].id ){
      record = customerList[i];
      break;
    }
  }
	return record;
};
customerService.editCustomers = function(record){
    for (var i = 0; i < customerList.length; i++) {
    if(record.id == customerList[i].id ){
      customerList[i] = record;
      break;
    }
  }
};

module.exports = customerService;