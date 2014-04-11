console.log('common.js: libs to be shared by pages');
var d3 = require('d3');
var nv = require('nvd3');
alert('COMMON: local nv keys:\n\t' + Object.keys(nv).join('\n\t'));
alert('COMMON: window.nv keys:\n\t' + Object.keys(window.nv).join('\n\t'));
