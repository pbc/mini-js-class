//  Copyright (c) 2013 Pawel Barcik
//
//  Permission is hereby granted, free of charge, to any person obtaining
//  a copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to
//  permit persons to whom the Software is furnished to do so, subject to
//  the following conditions:
//
//  The above copyright notice and this permission notice shall be
//  included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


// Minimal JavaScript Class implementation version 0.0.1
function Class (_proto_class, _definition) {

  var _instance = function(){
    return _class.constructor.apply(_class,arguments);
  };

  var _prototype = _proto_class == null ? null : new _proto_class;

  var _class = function(){
    return _instance.apply(_instance,arguments);
  };

  // this should provide instance with correct inheritance
  _class.prepareInstance = function(instanceFunction) {
    instanceFunction.prototype = _prototype;
    return new instanceFunction;
  };

  if(typeof _definition != "undefined") {
    _definition(_class);
  }

  return _class;
}



