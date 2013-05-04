var TestClass = new Class(null, function($class) {

  // class attributes
  $class.foo = 123;
  $class.bar = 234;

  // class method
  $class.getFoo = function() {
    // class attributes are accessible here
    return $class.foo;
  };

  // instance constructor
  $class.constructor = function(param1, param2) {

    // named function here instead of an anonymous one is purely for debugging purposes
    // to be able see the class name in Chrome browser's console
    var $self = new function TestClass () {};

    // instance attributes
    $self.foo = param1;
    $self.bar = param2;

    // instance methods
    $self.baz = function() {
      return "baz";
    };

    $self.bazCallback = function() {
      return $self.baz();
    };

    // return instance
    return $self;
  };

});


var testObj1 = new TestClass("abc", "def");
var testObj2 = new TestClass("abc123", "def123");

console.log(TestClass.foo); // => 123
console.log(TestClass.bar); // => 234

console.log(TestClass.getFoo()); // => 123

console.log(testObj1.foo); // => "abc"
console.log(testObj1.bar); // => "def"
console.log(testObj1.baz()); // => "baz"
console.log(testObj1.bazCallback()); // => "baz"

console.log(testObj2.foo); // => "abc123"
console.log(testObj2.bar); // => "def123"

