const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// Pass `files` to be linted. They should be JavaScript files.
// You can pass either a single path as a string, or an array of paths.
function lintJsFiles(files) {
  return gulp.src(files)
    .pipe(plugins.eslint())
    // This turns on reporting, so that the result is logged to the terminal
    .pipe(plugins.eslint.format())
    // This makes it so that errors cause the task to fail
    .pipe(plugins.eslint.failAfterError());
}

const srcFiles = ['./src/**/*.js'];
const testFiles = ['./src/**/*.js'];
const gulpFiles = ['gulpfile.js', './gulp-tasks/**/*.js'];
const allFiles = [...srcFiles, ...testFiles, ...gulpFiles];

// Lints the src code
function lintJsApp() {
  return lintJsFiles(appFiles);
}

// Lints unit test code
function lintTests() {
  return lintJsFiles(testFiles);
}

// Lints the Gulpfile and its tasks
function lintGulp() {
  return lintJsFiles(gulpFiles);
}

// Lints all JS files
function lintAllJs() {
  return lintJsFiles(allFiles);
}

module.exports = {
  lintJsApp,
  lintTests,
  lintGulp,
  lintAllJs
};
