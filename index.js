
function bmiCalculator(weight, height) {
    //TODO
    var bmi = weight / Math.pow(height, 2);
    return bmi;
}


describe('bmiCalculator()', function() {
    
    it('should work for the example given', function() {
        expect(bmiCalculator(60, 2)).toEqual(15);
    });
});

// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());
