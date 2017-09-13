var CachingWriter = require('broccoli-caching-writer');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var walkSync = require('walk-sync');

function InjectLivereload(inputTree, options) {
  if (!(this instanceof InjectLivereload)) {
    return new InjectLivereload(inputTree, options);
  }

  this.enforceSingleInputTree = true;

  options = options || {};
  this.port = options.port || 35729;

  CachingWriter.apply(this, arguments);
}

InjectLivereload.prototype = Object.create(CachingWriter.prototype);
InjectLivereload.prototype.constructor = InjectLivereload;

InjectLivereload.prototype.updateCache = function (srcDir, destDir) {
  var self = this;

  walkSync(srcDir).forEach(function (relativePath) {
    if (relativePath.slice(-1) !== '/') {
      self.handleFile(srcDir, destDir, relativePath);
    }
  });
};

InjectLivereload.prototype.handleFile = function (srcDir, destDir, relativePath) {
  var fullInputPath = path.join(srcDir, relativePath);
  var fullOutputPath = path.join(destDir, relativePath);
  var contents;

  var snippet = [
    "<!-- livereload snippet -->",
    "<script>document.write('<script src=\"http://'",
    " + (location.host || 'localhost').split(':')[0]",
    " + ':" + this.port + "/livereload.js?snipver=1\"><\\/script>')",
    "</script>",
    ""
  ].join('\n');

  if (path.extname(relativePath) === '.html') {
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

module.exports = InjectLivereload;
