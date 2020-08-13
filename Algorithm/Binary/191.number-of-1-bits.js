/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * 移除最后一个 1
 */
var hammingWeight = function(n) {
  let sum = 0;

  while (n !== 0) {
    n &= n -1
    sum++;
  }

  return sum;
};