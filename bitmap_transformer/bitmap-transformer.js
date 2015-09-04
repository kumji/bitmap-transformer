'use strict';

 // pull in information from bitmap-constructor Bitmap.pixelatedColors

var ColorChanges = function(data) {
	this.invertedColors = [];
	this.grayscaleColors = [];
}

 ColorChanges.prototype.inverted = function() {
 	 var invertedPixels = {};
 	for (var i = 0; i < Bitmap.pixelatedColors.length; i += 3) {
 		invertedPixels.blue = 255 - pixelatedColors[i]; // blue
 		invertedPixels.green = 255 - pixelatedColors[i +1]; // green
 		invertedPixels.red = 255 - pixelatedColors [i + 2]; //red
 	};
 	this.invertedColors.push(invertedPixels);
 };

 ColorChanges.prototype.grayscale = function(){
 	var grayscalePixels = {};
 	for (var i = 0; i < Bitmap.pixelatedColors.length; i += 3) {
 		var average = (pixelatedColors[i] + pixelatedColors [i + 1] + pixelatedColors[i +2]) /3;
 		grayscalePixels.blue = 
 		grayscalePixels.green = 
 		grayscalePixels.red =
 	};
 	this.grayscaleColors.push(grayscalePixels);
 };