/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbSettings = require('./dbSettings');

var mysqlConnecton = mysql.createConnection(dbSettings.mysqldbconfig);
mysqlConnecton.connect(function(err) {
	if (err) {
		console.log('Error connecting to My SQL DB - ' + err);
		return;
	}
	console.log('Connection established with My SQL DB');
});



var employeeList = {};


router.get('/', function(req, res) {

	readAllEmployees(res);


});

/**
 * Get All records from table employee in My SQL DB
 */
function readAllEmployees(res) {
	mysqlConnecton.query('select * from employee ', function(err, result) {
		if (err) {
			console.error(err);
		} else {
			console.log("Select All Employees Success");
			res.render('index', {
				title : 'Connect My SQL DB App',
				employeeList : result,
				categoryList : {}
			});

		}
	});
}

router.post('/add', function(req, res) {

	var employee = {};
	employee.id = req.body.id;
	employee.name = req.body.name;
	employee.doj = req.body.doj;
	employee.salary = req.body.salary;

	mysqlConnecton.query(' insert into employee set ?', employee, function(err,
			result) {

		if (err) {
			console.error(err);
			res.redirect('/');
		}
		console.log(result);
		console.log("Insert is Success");
		readAllEmployees(res);
		res.redirect('/');

	});

});

module.exports = router;
