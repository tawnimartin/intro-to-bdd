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

  });

  describe("cubed", function() {

    it("returns the value of the number cubed", function() {
      expect( bar.cubed(2) ).eq(8);
      expect()
    });

  });


  describe("exponentOf", function() {
    it("returns the value of a variable number to the exponent of another variable number", function() {
      //
      var powerOf3 = bar.exponentOf(3);
      //for example, running bar.exponentOf(3) returns the "inner" function.. 
      //that would look like this:
      //  function(num) {
      //  return Math.pow(num, 3);<--power of 3
      //  };
      //then the test would be to test the new function you created
      //passing it the number you want to get to the power of 3
      expect( powerOf3(2) ).eq(8);
      expect()
    });

  });


  describe("reverseString", function() {

    it("retuns the string reversed", function() {
      var originalString = "string";
      var reversedString = "gnirts"
      
      expect( bar.reverseString(originalString) ).eq(reversedString);
      expect()
    });

  });


  describe("cipher", function() {

    it("retuns a ciphered string - with each letter converted to unicode+100", function() {
      var originalString = "string";
      var cipheredString = "×ØÖÍÒË"
      
      expect( bar.cipher(originalString) ).eq(cipheredString);
      expect()
    });

  });

  describe("decipher", function() {

    it("returns a deciphered string - ciphered using the function above", function() {
      var originalString = "×ØÖÍÒË";
      var cipheredString = "string"
      
      expect( bar.decipher(originalString) ).eq(cipheredString);
      expect()
    });

  });

  describe("rot13", function() {

    it("returns a rot13 ciphered string", function() {
      var originalString = "tawni";
      var cipheredString = "gnjav"
      
      expect( bar.rot13(originalString) ).eq(cipheredString);
      expect()
    });

  });


});
