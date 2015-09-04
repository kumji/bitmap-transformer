'use strict';


var FileControl = require('./lib/filecontrol.js');
var EE = require('events').EventEmitter;
var BitmapConstructor = require('./lib/bitmap-constructor.js');

var fileCtrl = new FileControl();
var bitCons = new BitmapConstructor();
var ee = new EE();


fileCtrl.readImg('./img/coffee.bmp', function(err,data) {
	if(err) {
		console.log('error to load.');
	}
	else { 
		ee.emit('bitmapControl',data);
		console.log('Read Image into buffer successfully.');
	};
});


ee.on('bitmapControl', function() {
	bitmap = new Buffer(data);
	bitCons.Bitmap(bitmap);
});
