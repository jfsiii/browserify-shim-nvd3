(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"d3":"PE6Re1","jquery":"d6Ad4U","nvd3":"6S4ZC+"}]},{},[1])