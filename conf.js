var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Second-spec.js'],
    onPrepare : function() {
      browser.driver.manage().window().maximize();
      //browser.get('http://juliemr.github.io/protractor-demo/');
      //browser.sleep(2500);
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/reports'
        })
      );
    }
  };