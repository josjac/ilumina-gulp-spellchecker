var gulp = require('gulp');

var path = require('path');

var _ = require('lodash');

var cwd = process.cwd();

var html2txt = require('gulp-html2txt');

var spellcheck = require('gulp-spellcheck');

var frep = require('gulp-frep');

var default_config = {
  src: [
    path.join(cwd, 'dist', '**.html')
  ],
  html2txt: {
    ignoreHref: true,
    ignoreImage: true
  },
  language: 'es',
  replacement: '<<<%s (suggestions: %s)>>>',
  nonSuggestions: [{
    pattern:  /<<<.+>>>|([^\s]+[^<]+)/g,
    replacement: function(match) {
      if (match.indexOf('<')==0) {
        return '\n' + match +'\n'; 
      } 
      return '';
    }
  }] 
};

var self = {
  config: default_config,
  set: function(config) {
    this.config = _.assign(this.config, config);
  },
  run: function(config) {
    checker(config || this.config);
  }
};

function checker(config) {
  var a = gulp.src(config.src)
  .pipe(html2txt(config.html2txt))
  .pipe(spellcheck({
    language: config.language,
    replacement: config.replacement
  }))
  .pipe(gulp.dest('dist-spellchecker'))
  .pipe(frep(config.nonSuggestions));

  a.on('data', function(chunk) {
    var contents = chunk.contents.toString().trim(); 
    var bufLength = process.stdout.columns;
    var hr = '\n' + Array(bufLength).join("_") + '\n\n'
    if (contents.length > 1) {
      process.stdout.write('\033[31m' + chunk.path + ': \033[0m \n' + contents + '\n');
      process.stdout.write(hr);
    }
  });
}

gulp.task('spellchecker', function() {
  self.run();
});

module.exports = self;