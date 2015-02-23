window.Foo = (function() {

  function Foo() {

  }

  Foo.prototype = {

  	plusOne: function(num) {
  		return num + 1;
  	},

  	sortArray: function(unsorted) {

  		 var clonedArray = _.clone(unsorted);
  		 return clonedArray.sort();

  	},

  	hasValue: function(array, materialToCheck) {
     var found = _.contains(array, materialToCheck);
	   return found;
  	
  	}



  };

  return Foo;

})();
