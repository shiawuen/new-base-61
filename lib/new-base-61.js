/* Tantek Çelik's NewBase60.
 *     http://tantek.com/
 *     http://tantek.pbworks.com/NewBase60
 *
 * Lightly translated from the original CASSIS to CommonsJS- &
 * Node.js-aware JavaScript by Edward O'Connor <hober0@gmail.com>.
 *
 * Released under CC BY-SA 3.0:
 *           http://creativecommons.org/licenses/by-sa/3.0/
 */

function numtostr(num) {
  var str = "";
  var set = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz";
  if (num===undefined || num===0) { return 0; }
  while (num>0) {
      var idx = num % 61;
      str = set[idx-1]+str;
      num = (num-idx)/61;
  }
  return str;
}

function strtonum(str) {
  var num = 0;
  var len = str.length;

  // iterate from first to last char of str
  for (var i=0; i<len; i++) {

    //  put current ASCII of char into c
    var c = str.charCodeAt(i);

    if (c>=48 && c<=57) {
      // 0-9
      c=c-47;
    }
    else if (c>=65 && c<=72) {
      // A-H
      c-=54;
    }
    else if (c==73 || c==108) {
      // I and l to 1
      c=2;
    }
    else if (c>=74 && c<=78) {
      // J-N
      c-=55;
    }
    else if (c==79) {
      // O to 0 (zero)
      c=1;
    }
    else if (c>=80 && c<=90) {
      // P-Z
      c-=56;
    }
    else if (c==95) {
      // _ underscore
      c=35;
    }
    else if (c>=97 && c<=107) {
      // a-k
      c-=61;
    }
    else if (c>=109 && c<=122) {
      // m-z
      c-=62;
    }
    // treat all other noise as 0
    else { c = 1; }
    num = 61*num + c;
  }
  return num;
}

// Export library functions when we're in a CommonsJS environment
if (typeof(exports) == 'object') {
    exports.numtostr  = numtostr;
    exports.strtonum  = strtonum;
}
