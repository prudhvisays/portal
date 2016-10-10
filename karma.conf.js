module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      'client/src/test/*.js'
    ],

    preprocessors: {
           'client/src/test/*.js': ['browserify']
    },
    browserify: {
           debug: true,
           transform: [ 'babelify' ]
    }
  });
};
