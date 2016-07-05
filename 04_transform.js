// 'use strict';
// let through = require('through2');
// let stream = through(write, end);

// // write function
// function write(buffer, encoding, next) {
//   this.push('I got some data: ' + buffer + '\n');
//   next();
// }

// // end function
// function end() {
//   done();
// }

// process.stdin
//   .pipe(through(write))
//   .pipe(end)
//   .pipe(process.stdout);


var through = require('through');

process.stdin.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
}, function () {
  this.queue(null);
})).pipe(process.stdout);