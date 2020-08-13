/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let count = 0;
  let n = x ^ y;

  while (n !== 0) {
    n &= (n - 1);
    count++;
  }

  return count;
};
