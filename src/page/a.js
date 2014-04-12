var d3 = require('d3');
alert('PAGE A: local d3 keys:\n\t' + Object.keys(d3).join('\n\t'));
if (!Object.keys(d3).length) {
  alert('PAGE A: window.d3 keys:\n\t' + Object.keys(window.d3).join('\n\t'));
}

var nv = require('nvd3');
alert('PAGE A: local nv keys:\n\t' + Object.keys(nv).join('\n\t'));
if (!Object.keys(nv).length) {
  alert('PAGE A: window nv keys:\n\t' + Object.keys(window.nv).join('\n\t'));
}

var jquery = require('jquery');
alert('PAGE A: local jquery keys:\n\t' + Object.keys(jquery).join('\n\t'));
if (!Object.keys(jquery).length) {
  alert('PAGE A: window.jQuery keys:\n\t' + Object.keys(window.jQuery).join('\n\t'));
}
