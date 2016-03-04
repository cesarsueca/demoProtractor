//Configuración del informe que se crea con los resultados de las pruebas.
var d = new Date();
d = '['+d.getFullYear()+"-"+(d.getMonth()+1)+"-" +d.getDate()+']('+d.getHours()+'.'+d.getMinutes()+'.'+d.getSeconds()+')';
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'reporter/'+d,
  filename: 'report.html'
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
        'browserName': 'chrome'
  },
  
  // Si queremos que los tests se lancen en varios navegadores a la vez.

  /*multiCapabilities: [{
    'browserName': 'chrome'
  }, {
	'browserName': 'firefox'
  }],*/

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['*_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }

};
