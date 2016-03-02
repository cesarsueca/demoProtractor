// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
        'browserName': 'chrome'
  },
  
  // Si queremos que los tests se lancen en varios navegadores a la vez.
  /* 
  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
	'browserName': 'firefox'
  }],
  */
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['demoSINA.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
