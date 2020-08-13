/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(t) {
  let result = 0;
  let pow = 31;

  while (t !== 0) {
    result += (t & 1) << pow;
    t >>>= 1;
    pow -= 1;
  }

  return result >>> 0;
};