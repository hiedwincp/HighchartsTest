/**
 * http://usejsdoc.org/
 */

var oracledb = require('oracledb');
var dbSettings = require('./dbSettings');

oracledb
		.getConnection(
				dbSettings.oracledbconfig,
				function(err, connection) {
					if (err) {
						console.error('Error connecting to Oracle SQL DB - '
								+ err);
						return;
					}

					console.log('Oracle DB Connection established');

					
					connection
							.execute(
									"select to_char(BANK_TRANS_DATE,'YYYY-MM') as transctionYearMonth, count(*) as transctionCount from BANK_TRANS_ARTIVA group by to_char(BANK_TRANS_DATE,'YYYY-MM') " +
									"order by to_char(BANK_TRANS_DATE,'YYYY-MM')",
									function(err, result) {
										if (err) {
											console.error(err);
											return;
										}

										console
												.log('Select All BANK_TRANS_ARTIVA data');
										
										console.log(result);
										connection.release(function(err) {
											if (err) {
												console.error(err);
											}
										});
									});
				});
