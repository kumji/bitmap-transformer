'use strict';

var fs = require('fs');

ReadImg = function(filename, callback){
	fs.readFile(filename, function(err,data){
		if(err) return callback(err,null);		
		else	return callback(null,data);
	});
};

WriteImg = function(filename, data, callback){
	fs.writeFile(filename, data, function(err){
		if(err) throw err;
	});
};



module.exports = ReadImg;
module.exports = WriteImg;

