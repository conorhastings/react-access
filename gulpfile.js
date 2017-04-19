// I have VERY LARGELY copied this from @jmeas, for...science. to start. but organized my way.
const gulp = require('gulp');

/*
  Section: testing
  Functions found in `gulp-tasks/test.js` that primarily handle all things test related
*/
const test = require('./gulp-tasks/test');
gulp.task('test', test.mocha);

/*
  Section: building & bundling
  Functions found in `gulp-tasks/dist.js` that primarily pertain to all things `dist/`,
  which is the primary output target for this module that consumers need.
*/
const dist = require('./gulp-tasks/dist');
gulp.task('clean', dist.clean);
gulp.task('build', ['clean'], dist.build);

/*
Section: linting & formating
Functions found in `gulp-tasks/lint.js` that primarily handle all things test related
*/
const lint = require('./gulp-tasks/lint');
gulp.task('lint', lint.lintAllJs);
