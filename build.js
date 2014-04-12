#!/usr/bin/env node

var fs         = require('fs');
var browserify = require('browserify');
var working    = [ 'd3', 'jquery' ];
var notWorking = [ 'nvd3' ];
var packages   = working.concat(notWorking);

// make the common / shared bundle
browserifyCommon('./src/index.js', './build/common.js');

// make the page(s)
browserifyPage('./src/page/a.js', './build/page/a.js');

function browserifyCommon(entry, bundle) {
  console.log("\nbuild common");
  return browserifyBundle({entry: entry, bundle: bundle, require: true});
}

function browserifyPage(entry, bundle) {
  console.log("\nbuild page");
  return browserifyBundle({entry: entry, bundle: bundle});
}

function browserifyBundle(opts) {
  var bOpts = {};
  var b = browserify(bOpts);
  console.log('browserify(', bOpts, ')');

  packages.forEach(function(pkg) {
    if (opts.require) {
      b = b.require(pkg);
      console.log('\t.require(', pkg, ')');
    } else {
      b = b.external(pkg);
      console.log('\t.external(', pkg, ')');
    }
  });

  console.log('\t.add(', opts.entry, ')');
  console.log('\t.bundle()')
  console.log('\t.pipe(', opts.bundle, ')');
  b
    .add(opts.entry)
    .bundle()
    .pipe(fs.createWriteStream(opts.bundle));
}
