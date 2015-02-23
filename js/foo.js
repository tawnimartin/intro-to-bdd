window.Foo = (function() {

  function Foo() {

  }

  Foo.prototype = {

  	plusOne: function(num) {
  		return num ++;
  	}

  };

  return Foo;

})();
