/**
 * http://usejsdoc.org/
 */

// MS SQL DB server connection details 
exports.mssqldbconfig = {
	server : "10.10.50.35",
	user : "sa",
	password : "Asta1234",
	database : "esgqlogdb",
	port : 1433
};

//My SQL DB Local server connection details
exports.mysqldbconfig = {
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'employee'
};


//Oracle SQL DB server connection details
exports.oracledbconfig = {
		user : 'analysis',
		password : 'analysis',
		connectString : '10.10.13.215/CT'
	};
