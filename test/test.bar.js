describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("returns the value of the number squared", function() {
      expect( bar.squared(2) ).eq(4);
      expect()
    });

  });//

  describe("cubed", function() {

    it("returns the value of the number cubed", function() {
      expect( bar.cubed(2) ).eq(8);
      expect()
    });

  });//


  // describe("exponentOf", function() {

  //   it("returns the value of the number to the exponent of another number", function() {
  //     function testFunction() {
  //       return 2;
  //     }
  //     expect( bar.exponentOf(testFunction,3) ).eq(8);
  //     expect()
  //   });

  // });//going to come back to this one


    describe("reverseString", function() {

    it("retuns the string reversed", function() {
      var originalString = "string";
      var reversedString = "gnirts"
      
      expect( bar.reverseString(originalString) ).eq(reversedString);
      expect()
    });

  });//




});
