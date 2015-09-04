'use strict';

var fs = require('fs');

FileReadImg = function(filename, callback){
	fs.readFile(filename, function(err,data){
		if(err) return callback(err,null);		
		else	return callback(null,data);
	});
};

FileSaveImg = function(filename, data, callback){
	fs.writeFile(filename, data, function(err){
		if(err) throw err;
	});
};


module.exports = FileReadImg;
module.exports = FileSaveImg;

