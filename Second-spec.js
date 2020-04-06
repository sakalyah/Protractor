var using = require('jasmine-data-provider');
var datainf = require("./data.js");
describe('Protractor Demo App', function() {
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  using(datainf.Datadriven,function(data,description){
    it('should have a title '+ description, function() {
      
      console.log("Protractor First Test");
      browser.getTitle().then(function(text){
        console.log(text);
        element(by.model('first')).sendKeys(data.First);
      element(by.model('second')).sendKeys(data.Second);
  
      element(by.id('gobutton')).click();
      expect(element(by.binding('latest')).getText()).
      toEqual(data.result).then(function(){
        element(by.xpath("//tr[@class='ng-scope']//td[1]")).getText().then(function(text){
          console.log(text);
        });
        
         });
      });
      
     
          
    });
  });
    
  });