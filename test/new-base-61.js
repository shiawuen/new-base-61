
var should = require('should');
var nb61 = require('../index');

describe('New Base 61', function(){

  var genVal = function(v, i){
    var val = 0;

    while (i--) {
      val = 61 * val + v;
    }

    return val;
  };

  var cm = { 1:'0', 2:'1' };
  var sets = {
    '0': 1 , '1': 2
  , '2': 3 , '3': 4
  , '4': 5 , '5': 6
  , '6': 7 , '7': 8
  , '8': 9 , '9': 10
  , 'A': 11, 'B': 12
  , 'C': 13, 'D': 14
  , 'E': 15, 'F': 16
  , 'G': 17, 'H': 18
  , 'I': 2 , 'J': 19
  , 'K': 20, 'L': 21
  , 'M': 22, 'N': 23
  , 'O': 1 , 'P': 24
  , 'Q': 25, 'R': 26
  , 'S': 27, 'T': 28
  , 'U': 29, 'V': 30
  , 'W': 31, 'X': 32
  , 'Y': 33, 'Z': 34
  , '_': 35, 'a': 36
  , 'b': 37, 'c': 38
  , 'd': 39, 'e': 40
  , 'f': 41, 'g': 42
  , 'h': 43, 'i': 44
  , 'j': 45, 'k': 46
  , 'l': 2 , 'm': 47
  , 'n': 48, 'o': 49
  , 'p': 50, 'q': 51
  , 'r': 52, 's': 53
  , 't': 54, 'u': 55
  , 'v': 56, 'w': 57
  , 'x': 58, 'y': 59
  , 'z': 60
  };


  var cm2 = { 124:'11', 62:'00' };
  var sets2 = {};

  Object.keys(sets).forEach(function(k){
    sets2[k+k] = genVal(sets[k], 2);
  });


  var cm3 = { 7566:'111', 3783:'000' };
  var sets3 = {};

  Object.keys(sets).forEach(function(k){
    sets3[k+k+k] = genVal(sets[k], 3);
  });


  describe('strtonum', function() {
    Object.keys(sets).forEach(function(k){
      it('converts ' +k+ ' to integer value of ' +sets[k], function(){
        nb61.strtonum(k).should.eql(sets[k]);
      });
    });
  });


  describe('numtostr', function(){
    var skips = ['O', 'I', 'l'];

    Object.keys(sets).forEach(function(k){
      it('converts integer value of ' +sets[k]+ ' to ' +k, function(){
        // Skip those items that gets converted to other value
        if (skips.indexOf(k) !== -1) { return; }

        nb61.numtostr(sets[k]).should.eql(k);
      });
    });
  });

  describe('strtonum <-> numtostr', function(){

    var testSets = [
      {s:sets, m:cm}
    , {s:sets2, m:cm2}
    , {s:sets3, m:cm3}];

    testSets.forEach(function(ts){

      Object.keys(ts.s).forEach(function(k){
        it('converts value back and forth', function() {

          var val1 = nb61.strtonum(k);

          var val2 = nb61.numtostr(val1);

          var key = !!ts.m[val1] ? ts.m[val1] : k;

          var ok = val2 === key;

          val1.should.be.eql(ts.s[k]);
          ok.should.be.ok;

        });
      });

    });
  })
});