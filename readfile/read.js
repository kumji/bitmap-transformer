var fs = require('fs');

var img_dir = 'img';

var offsets = {
    'header': 14,
    'width': 18,
    'height': 22,
    'pixel_depth': 28,
    'bitmap_data_size': 34,
    'palette': 138,
};

var nonpallete_bmp = img_dir + '/non-palette-bitmap.bmp';
var nonpallete_buf = fs.readFileSync(nonpallete_bmp);

var header = nonpallete_buf.readUInt32LE(offsets['header']);
var width = nonpallete_buf.readUInt32LE(offsets['width']);
var height = nonpallete_buf.readUInt32LE(offsets['height']);
var pallete_depth = nonpallete_buf.readUInt32LE(offsets['pixel_depth']);
var bitmap_data_size = nonpallete_buf.readUInt32LE(offsets['bitmap_data_size']);

console.log(header, width, height, pallete_depth, bitmap_data_size);
