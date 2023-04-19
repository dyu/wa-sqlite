// Karma configuration
// Generated on Tue Apr 20 2021 22:15:36 GMT-0700 (Pacific Daylight Time)

process.env.CHROME_BIN = require('puppeteer').executablePath();
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher'],
    client: {
      jasmine: {
        random: true,
        timeoutInterval: 30_000
      }
    },

    // list of files / patterns to load in the browser
    mime: { 'application/wasm': ['wasm'] },
    files: [
      { pattern: 'node_modules/sinon/**/*.js', type: 'module', included: false },
      { pattern: '{dist,debug}/*.mjs', type: 'module', included: false },
      { pattern: '{dist,debug}/*.wasm', type: 'wasm', included: false },
      { pattern: 'test/*.test.js', type: 'module' },
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/*.js', included: false }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
