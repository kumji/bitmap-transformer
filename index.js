'use strict';


var FileReadImg = require('./lib/filecontrol.js').fileReadImg();
var FileSaveImg = require('./lib/filecontrol.js').fileSaveImg();
var EventEmitter = require('events').EventEmitter;
var BitmapConstructor = require('./lib/bitmap-constructor.js');

var readImg = new FileReadImg();
var saveImg = new FileSaveImg();
var eventEmitter = new EventEmitter();
var bitmapConstructor = new BitmapConstructor();


fileCtrl.readImg('./img/coffee.bmp', function(err,data) {
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
