/*jshint globalstrict:true, devel:true, newcap:false */
/*global require */

/**
 * Build CSS and JavaScript using `gulp`.
 *
 * Main targets are: `js`, `css` and `watch`.
 *
 * Run with `--production` to get minified sources.
 */

"use strict";

var argv = require('yargs').argv,

    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    gulpif     = require('gulp-if'),

    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    watchify   = require('watchify'),
    uglify     = require('gulp-uglify'),

    minifyCSS  = require('gulp-minify-css');


// Directory where static files are found. Don't forget the slash at the end.
var staticDirectory = './client/',

    // Source and target JS files for Browserify
    jsMainFile      = staticDirectory + 'src/index.js',
    jsBundleFile    = 'bundle.js',

    // Source and target LESS files
    cssMainFile     = staticDirectory + 'src/styles/Styles.css',
    cssFiles        = staticDirectory + 'src/styles/**/*.css';

// Browserify bundler, configured for reactify with sources having a .jsx extension
var bundler = browserify({
    entries: [jsMainFile],
    debug: !argv.production,
    cache: {}, packageCache: {}, fullPaths: true // for watchify
}).transform("babelify", {
    presets: ["es2015", "react", "stage-2"]
  });

// Build JavaScript using Browserify
gulp.task('js', function() {
    return bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source(jsBundleFile))
        .pipe(buffer())
        .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true}))) // loads map from browserify file
        .pipe(gulpif(!argv.production, sourcemaps.write('./'))) // writes .map file
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest(staticDirectory +"dest"));
});

// Build CSS
gulp.task('css', function(){
    return gulp.src(cssMainFile)
        .pipe(gulpif(argv.production, minifyCSS({keepBreaks:true})))
        .pipe(gulp.dest(staticDirectory +"dest"));
});

gulp.task("images",function(){
  gulp.src("./images/**/*")
      .pipe(gulp.dest(staticDirectory + "dest/images"))
})

// Watch JS + CSS using watchify + gulp.watch

gulp.task('watchify', function() {
    var watcher  = watchify(bundler);
    return watcher
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .on('update', function () {
        watcher.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source(jsBundleFile))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest(staticDirectory + "dest"));

        gutil.log("Updated JavaScript sources");
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source(jsBundleFile))
    .pipe(gulp.dest(staticDirectory + "dest"));
});

gulp.task('csswatch', function () {
    gulp.watch(cssFiles, ['css']);
});

gulp.task('watch', ['watchify', 'csswatch']);
gulp.task('default', ['js', 'css','images']);
