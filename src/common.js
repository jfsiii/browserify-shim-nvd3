alert('common.js: libs to be shared by pages');
var d3 = require('d3');
alert('COMMON: local d3 keys:\n\t' + Object.keys(d3).join('\n\t'));
if (!Object.keys(d3).length) {
  alert('COMMON: window.d3 keys:\n\t' + Object.keys(window.d3).join('\n\t'));
}

var nv = require('nvd3');
alert('COMMON: local nv keys:\n\t' + Object.keys(nv).join('\n\t'));
if (!Object.keys(nv).length) {
  alert('COMMON: window.nv keys:\n\t' + Object.keys(window.nv).join('\n\t'));
}

var jquery = require('jquery');
alert('COMMON: local jquery keys:\n\t' + Object.keys(jquery).join('\n\t'));
if (!Object.keys(jquery).length) {
  alert('COMMON: window.jQuery keys:\n\t' + Object.keys(window.jQuery).join('\n\t'));
}
