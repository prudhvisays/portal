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
    },
    reporters: ['progress', 'html'],
    htmlReporter: {
                    outputFile: 'tests/units.html',
                    pageTitle: 'Test results',
                    subPageTitle: 'Crossover Video Portal',
                    groupSuites: true,
                    useCompactStyle: true,
                    useLegacyStyle: true
                  }
  });
};
