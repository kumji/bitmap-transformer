'use strict';

var Bitmap = { function(data) {
	this.header = 
	this.width =
	this.height = 
	this.pixelatedColors = [];
	};
}

//generate splice to offset palleteTable to zero from where the header ends DIB

Bitmap.prototype.palleteColorData = function() { // assigns RGB data to pallete
	var palleteRGBAdata= [];
	for(var i = 0; i < palleteTable.length; i = i + 3) { // need to divide the 32 bit into 4 parts
		pixelation = {};
		pixelation.red = this.palleteTable.readUInt8(i);
		pixelation.green = this.palleteTable.readUInt8(i + 1);
		pixelation.blue = this.palleteTable.readUInt8(i + 2); // this will give us a total of 32 bits
		this.pixelatedColors.push(pixelation); // pushes the pixelation data into Bitmap object
	}
}

//rasher data = 
module.exports = Bitmap;