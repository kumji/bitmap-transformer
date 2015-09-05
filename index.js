'use strict';


var ReadImg = require('./lib/filecontrol.js').ReadImg();
var WriteImg = require('./lib/filecontrol.js').WriteImg();
var EventEmitter = require('events').EventEmitter;
var BitmapConstructor = require('./lib/bitmap-constructor.js');

var readImg = new ReadImg();
var writeImg = new WriteImg();
var eventEmitter = new EventEmitter();
var bitmapConstructor = new BitmapConstructor();


readImg('./img/coffee.bmp', function(err,data) {
	if(err) {
		console.log('error to load.');
	}
	else { 
		eventEmitter.emit('bitmapControl',data);
		console.log('Read Image into buffer successfully.');
	};
});






eventEmitter.on('bitmapControl', function() {
	bitmap = new Buffer(data);
	bitmapConstructor.Bitmap(bitmap);
});


evenEmitter.on('writeImg', function(buf) {
	writeImg('./img/NewCoffee.bmp', buf, function(){
		if(err) 
	})
})