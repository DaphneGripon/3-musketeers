var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function(){
    it('should return true if passed argument is type Array', function(){
      expect(is.array(['value', 'value2'])).to.be.true;
    });
    it('should return false if passed argument is not type Array', function(){
      expect(is.array('value')).to.be.false;
    });
  });

  describe('is.boolean', function(){
    it('should return true if passed argument is type Boolean', function(){
      expect(is.boolean(true)).to.be.true;
    });
    it('should return false if passed argument is not type Boolean', function(){
      expect(is.boolean('hello')).to.be.false;
    });
  });

  describe('is.date', function(){
    it('should return true if passed argument is type Date', function(){
      expect(is.date(new Date())).to.be.true;
    });
    it('should return false if passed argument is not type Date', function(){
      expect(is.date('hello')).to.be.false;
    });
  });

  describe('is.error', function(){
    it('should return true if passed argument is type Error', function(){
      expect(is.error(new Error())).to.be.true;
    });
    it('should return false if passed argument is not type Error', function(){
      expect(is.error('hello')).to.be.false;
    });
  });

  describe('is.function', function(){
    it('should return true if passed argument is type Function', function(){
      expect(is.function(is.boolean)).to.be.true;
    });
    it('should return false if passed argument is not type Function', function(){
      expect(is.function('hello')).to.be.false;
    });
  });

  describe('is.nan', function(){
    it('should return true if passed argument is nan', function(){
      expect(is.nan(NaN)).to.be.true;
    });
    it('should return false if passed argument is not nan', function(){
      expect(is.nan(123)).to.be.false;
    });
  });

  describe('is.null', function(){
    it('should return true if passed argument is Null', function(){
      expect(is.null(null)).to.be.true;
    });
    it('should return false if passed argument is not Null', function(){
      expect(is.null(123)).to.be.false;
    });
  });

  describe('is.number', function(){
    it('should return true if passed argument is Number', function(){
      expect(is.number(123)).to.be.true;
    });
    it('should return false if passed argument is not Number', function(){
      expect(is.number('hello')).to.be.false;
    });
    it('should return false if passed argument is Nan', function(){
      expect(is.number(NaN)).to.be.false;
    });
  });

  describe('is.object', function(){
    it('should return true if passed argument is Object', function(){
      expect(is.object(new Object())).to.be.true;
    });
    it('should return false if passed argument is not Object', function(){
      expect(is.object(null)).to.be.false;
    });
  });

  describe('is.json', function(){
    it('should return true if passed argument is type Json', function(){
      var value = JSON.parse('{"title":true}');
      expect(is.json(value)).to.be.true;
    });
    it('should return false if passed argument is not type Json', function(){
      expect(is.json(true)).to.be.false;
    });
  });

  describe('is.sameType', function(){
    it('should return true if passed arguments are the same type', function(){
      expect(is.sameType("hello", "can you hear me")).to.be.true;
    });
    it('should return false if passed arguments are not the same type', function(){
      expect(is.sameType(NaN, 123)).to.be.false;
    });
  });

  describe('is.string', function(){
    it('should return true if passed argument is type String', function(){
      expect(is.string("hello, can you hear me")).to.be.true;
    });
    it('should return false if passed argument is not type String', function(){
      expect(is.string(123)).to.be.false;
    });
  });

  describe('is.char', function(){
    it('should return true if passed argument is type Char', function(){
      expect(is.string('h')).to.be.true;
    });
    it('should return false if passed argument is not type Char', function(){
      expect(is.string(123)).to.be.false;
    });
  });

  describe('is.undefined', function(){
    it('should return true if passed argument is type undefined', function(){
      var j;
      expect(is.undefined(j)).to.be.true;
    });
    it('should return false if passed argument is not type undefined', function(){
      expect(is.undefined('hello')).to.be.false;
    });
  });

  describe('is.empty', function(){
    it('should return true if passed argument is empty', function(){
      expect(is.empty('')).to.be.true;
    });
    it('should return false if passed argument is empty', function(){
      expect(is.empty('hello')).to.be.false;
    });
  });

  describe('is.existy', function(){
    it('should return true if passed argument is not null or undefined', function(){
      expect(is.existy('hello')).to.be.true;
    });
    it('should return false if passed argument is null', function(){
      expect(is.existy(null)).to.be.false;
    });
    it('should return false if passed argument is undefined', function(){
      var j;
      expect(is.existy(j)).to.be.false;
    });
  });

  describe('is.truthy', function(){
    it('should return true if passed argument is existy, is not empty, is true, is not Nan, not equal to 0', function(){
      expect(is.truthy('hello')).to.be.true;
    });
    it('should return false if passed argument is not existy', function(){
      expect(is.truthy(null)).to.be.false;
    });
    it('should return false if passed argument is empty', function(){
      expect(is.truthy('')).to.be.false;
    });
    it('should return false if passed argument is false', function(){
      expect(is.truthy(false)).to.be.false;
    });
    it('should return false if passed argument is Nan', function(){
      expect(is.truthy(NaN)).to.be.false;
    });
    it('should return false if passed argument equals 0', function(){
      expect(is.truthy(0)).to.be.false;
    });
  });

  describe('is.space', function(){
    it('should return true if passed argument is a space', function(){
      expect(is.space(' ')).to.be.true;
    });
    it('should return true if passed argument is a newline', function(){
      expect(is.space('\n')).to.be.true;
    });
    it('should return true if passed argument is a horizontal tab', function(){
      expect(is.space('\t')).to.be.true;
    });
    it('should return true if passed argument is a vertical tab', function(){
      expect(is.space('\v')).to.be.true;
    });
    it('should return true if passed argument is a carriage return', function(){
      expect(is.space('\r')).to.be.true;
    });
    it('should return true if passed argument is a form feed', function(){
      expect(is.space('\r')).to.be.true;
    });
    it('should return false if passed argument is not a space, not a newline, not a horizontal tab, not a vertical tab, not a form feed, not a carriage return', function(){
      expect(is.space('hello')).to.be.false;
    });
  });

  describe('is.equal', function(){
    it('should return true if passed arguments\' values are equal', function(){
      expect(is.equal(123,123)).to.be.true;
    });
    it('should return false if passed arguments\' values are not equal', function(){
      expect(is.equal(123,124)).to.be.false;
    });
    it('should return false if passed arguments\' values are not equal, same "value", not same type', function(){
      expect(is.equal(123,"123")).to.be.false;
    });
  });

  describe('is.even', function(){
    it('should return true is passed argument is even', function(){
      expect(is.even(2)).to.be.true;
    });
    it('should return false is passed argument is odd', function(){
      expect(is.even(1)).to.be.false;
    });
    it('should return false is passed argument is not type Number', function(){
      expect(is.even('hello')).to.be.false;
    });
    it('should return false is passed argument is Nan', function(){
      expect(is.even(NaN)).to.be.false;
    });
  });

  describe('is.odd', function(){
    it('should return true is passed argument is odd', function(){
      expect(is.odd(1)).to.be.true;
    });
    it('should return false is passed argument is even', function(){
      expect(is.odd(2)).to.be.false;
    });
    it('should return false is passed argument is not type Number', function(){
      expect(is.odd('hello')).to.be.false;
    });
    it('should return false is passed argument is Nan', function(){
      expect(is.odd(NaN)).to.be.false;
    });
  });

  describe('is.positive', function(){
    it('should return true if passed argument is type Number and positive', function(){
      expect(is.positive(2)).to.be.true;
    });
    it('should return false if passed argument is type Number and negative', function(){
      expect(is.positive(-1)).to.be.false;
    });
    it('should return false if passed argument is type Number and equal to 0', function(){
      expect(is.positive(0)).to.be.false;
    });
    it('should return false if passed argument is not Type Number', function(){
      expect(is.positive('hello')).to.be.false;
    });
    it('should return false if passed argument is NaN', function(){
      expect(is.positive(NaN)).to.be.false;
    });
  });

  describe('is.negative', function(){
    it('should return true if passed argument is type Number and negative', function(){
      expect(is.negative(-1)).to.be.true;
    });
    it('should return false if passed argument is type Number and positive', function(){
      expect(is.negative(2)).to.be.false;
    });
    it('should return false if passed argument is type Number and equal to 0', function(){
      expect(is.positive(0)).to.be.false;
    });
    it('should return false if passed argument is not Type Number', function(){
      expect(is.negative('hello')).to.be.false;
    });
    it('should return false if passed argument is NaN', function(){
      expect(is.negative(NaN)).to.be.false;
    });
  });

  describe('is.above', function(){
    it('should return true if first passed argument is strictly greater than the second one', function(){
      expect(is.above(1,0)).to.be.true;
    });
    it('should return false if first passed argument is equal to the second one', function(){
      expect(is.above(2,2)).to.be.false;
    });
    it('should return false if second passed argument is greater than the first one', function(){
      expect(is.above(0,2)).to.be.false;
    });
    it('should return false if first passed argument is not a Number', function(){
      expect(is.above('hello', 0)).to.be.false;
    });
    it('should return false if second passed argument is not a Number', function(){
      expect(is.above(0, 'hello')).to.be.false;
    });
    it('should return false if first passed argument is NaN', function(){
      expect(is.above(NaN, 0)).to.be.false;
    });
    it('should return false if second passed argument is NaN', function(){
      expect(is.above(0, NaN)).to.be.false;
    });
  });

  describe('is.under', function(){
    it('should return true if first passed argument is strictly under the second one', function(){
      expect(is.under(0,1)).to.be.true;
    });
    it('should return false if first passed argument is equal to the second one', function(){
      expect(is.under(2,2)).to.be.false;
    });
    it('should return false if second passed argument is under the first one', function(){
      expect(is.under(2,0)).to.be.false;
    });
    it('should return false if first passed argument is not a Number', function(){
      expect(is.under('hello', 0)).to.be.false;
    });
    it('should return false if second passed argument is not a Number', function(){
      expect(is.under(0, 'hello')).to.be.false;
    });
    it('should return false if first passed argument is NaN', function(){
      expect(is.under(NaN, 0)).to.be.false;
    });
    it('should return false if second passed argument is NaN', function(){
      expect(is.under(0, NaN)).to.be.false;
    });
  });

  describe('is.within', function(){
    it('should return true if the first argument is between the second and third', function(){
      expect(is.within(1, 0, 2)).to.be.true;
    });
    it('should return false if the first argument is not a Number', function(){
      expect(is.within('hello', 1, 2)).to.be.false;
    });
    it('should return false if the first argument is not NaN', function(){
      expect(is.within(NaN, 1, 2)).to.be.false;
    });
    it('should return false if the second argument is not a Number', function(){
      expect(is.within(0, 'hello', 2)).to.be.false;
    });
    it('should return false if the second argument is NaN', function(){
      expect(is.within(0, NaN, 2)).to.be.false;
    });
    it('should return false if the third argument is not a Number', function(){
      expect(is.within(1, 0, 'hello')).to.be.false;
    });
    it('should return false if the third argument is NaN', function(){
      expect(is.within(1, 0, NaN)).to.be.false;
    });
    it('should return false if the first argument not between the second and third', function(){
      expect(is.within(0, 1, 2)).to.be.false;
    });
    it('should return false if the second argument is greater than the third one', function(){
      expect(is.within(0, 2, 1)).to.be.false;
    });
    it('should return false if the second argument is equal to the third one', function(){
      expect(is.within(1, 0, 0)).to.be.false;
    });
  });

  describe('is.decimal', function(){
    it('should return true if passed argument is a number and decimal', function(){
      expect(is.decimal(1.2)).to.be.true;
    });
    it('should return false if passed argument is a number but not a decimal', function(){
      expect(is.decimal(1)).to.be.false;
    });
    it('should return false if passed argument is NaN', function(){
      expect(is.decimal(NaN)).to.be.false;
    });
    it('should return false if passed argument is not a Number', function(){
      expect(is.decimal('hello')).to.be.false;
    });
  });

  describe('is.integer', function(){
    it('should return true if passed argument is a number and integer', function(){
      expect(is.integer(1)).to.be.true;
    });
    it('should return false if passed argument is a number but not an integer', function(){
      expect(is.integer(1.2)).to.be.false;
    });
    it('should return false if passed argument is NaN', function(){
      expect(is.integer(NaN)).to.be.false;
    });
    it('should return false if passed argument is not a Number', function(){
      expect(is.integer('hello')).to.be.false;
    });
  });

  describe('is.finite', function(){
    it('should return true if passed argument is a number and finite', function(){
      expect(is.finite(1.2)).to.be.true;
    });
    it('should return false if passed argument is not finite', function(){
      expect(is.finite(1/0)).to.be.false;
    });
    it('should return false if passed argument is NaN', function(){
      expect(is.finite(NaN)).to.be.false;
    });
    it('should return false if passed argument is not a Number', function(){
      expect(is.finite('hello')).to.be.false;
    });
  });

  describe('is.include', function(){
    it('should return true if second argument is included in first', function(){
      expect(is.include('hello','hell')).to.be.true;
    });
    it('should return true if second argument is empty', function(){
      expect(is.include('hello', '')).to.be.true;
    });
    it('should return false if second argument not included in first', function(){
      expect(is.include('hello', 'can you hear me')).to.be.false;
    });
    it('should return false if second argument not a string', function(){
      expect(is.include('hello', NaN)).to.be.false;
    });
    it('should return false if first argument is empty', function(){
      expect(is.include('', 'hello')).to.be.false;
    });
  });
});
