'use strict';

module.exports.photosDylan = (event, context, callback) => {
	const AWS = require('aws-sdk');
	const s3 = new AWS.S3();
	let params = { 
		Bucket: 'photo-bucket-tmp-prjct'
	};

	s3.listObjects(params, (err, data) => {
   		const response = {
			statusCode: 200,
			headers: {
	        	'Access-Control-Allow-Origin' : '*', 
	        	'Access-Control-Allow-Credentials' : true
	      	},
			body: JSON.stringify({ 
				message: data,
			}),
		};
	  callback(null, response);
	});	 
};