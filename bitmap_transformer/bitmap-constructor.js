'use strict';

var Bitmap = { function(data) {
	this.bitmapFile = ???
	this.headerOffset = this.bitmapFile.splice(0, 14);
	this.headerDIB = this.bitmapFile.splice(14, 40);
	this.width = this.bitmapFile.readUint32[18];
	this.height = this.bitmapFile.readUint32[22];
	this.pixelArrayStart = this.bitmapFile.readUint32[54];
	this.binaryData = [];
	this.pixelatedColors = [];
	};
}
// generate a way of reading out the the binary data for where header, width, height
Bitmap.prototype.binaryData = function(header, width, height) {
	var binaryData = {};
	this.binaryData.header = this.bitmapFile.readUint32[14];
	this.binaryData.width = this.bitmapFile.readUint32[18];
	this.binaryData.height = this.bitmapFile.readUint32[22];
	this.binaryData.push(binaryData);
}

Bitmap.prototype.pixelArrayStart = function() {
	this.pixelArrayStart = this.bitmapFile.readUint32[54]; //accounting for 14 bits header and 40 bits DIB

}; //should go to 70
//generate splice to offset palleteTable to zero from where the header ends DIB

Bitmap.prototype.palleteColorData = function() { // assigns RGB data to pallete
	for(var i = 0; i < pixelArrayStart.length; i = i + 3) { // need to divide the 24 bit into 3 parts
		pixelation = {};
		pixelation.blue = this.pixelArrayStart.readUInt8(i); // based on wiki it appears blue, green, red order of pixel data
		pixelation.green = this.pixelArrayStart.readUInt8(i + 1);
		pixelation.red = this.pixelArrayStart.readUInt8(i + 2); 
		this.pixelatedColors.push(pixelation); // pushes the pixelation data into Bitmap object
	}
}

//rasher data = 
module.exports = Bitmap;