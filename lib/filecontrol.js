'use strict';

var fs = require('fs');
var FileControl = function(){};

FileControl.prototype.readImg = function(filename, callback){
	fs.readFile(filename, function(err,data){
		if(err) return callback(err,null);		
		else	return callback(null,data);
	});
};

FileControl.prototype.saveImg = function(filename, data, callback){
	fs.writeFile(filename, data, function(err){
		if(err) throw err;
	});
};

module.exports = FileControl;

