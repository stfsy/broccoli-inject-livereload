var CachingWriter = require('broccoli-caching-writer');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var walkSync = require('walk-sync');

var port = 35729;

var snippet = [
  "<!-- livereload snippet -->",
  "<script>document.write('<script src=\"http://'",
  " + (location.host || 'localhost').split(':')[0]",
  " + ':" + port + "/livereload.js?snipver=1\"><\\/script>')",
  "</script>",
  ""
].join('\n');

var handleFile = function (srcDir, destDir, relativePath) {
  var fullInputPath = path.join(srcDir, relativePath);
  var fullOutputPath = path.join(destDir, relativePath);
  var contents;
  if (isHtml(relativePath)) {
    contents = fs.readFileSync(fullInputPath, 'utf-8');
    contents = contents.replace(/<\/body>/, function (w) {
      return snippet + w;
    });
  } else {
    contents = fs.readFileSync(fullInputPath);
  }
  mkdirp.sync(path.dirname(fullOutputPath));
  fs.writeFileSync(fullOutputPath, contents);
};

function InjectLivereload(inputTree, options) {
  if (!(this instanceof InjectLivereload)) {
    return new InjectLivereload(inputTree, options);
  }
  this.enforceSingleInputTree = true;
  CachingWriter.apply(this, arguments);
}

var isHtml = function (filename) {
  return filename.slice(-5) === '.html';
};

InjectLivereload.prototype = Object.create(CachingWriter.prototype);
InjectLivereload.prototype.constructor = InjectLivereload;

InjectLivereload.prototype.updateCache = function (srcDir, destDir) {
  walkSync(srcDir).forEach(function (relativePath) {
    if (relativePath.slice(-1) !== '/') {
      handleFile(srcDir, destDir, relativePath);
    }
  });
};

module.exports = InjectLivereload;
