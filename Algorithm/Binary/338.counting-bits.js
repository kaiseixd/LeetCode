/**
 * @param {number} num
 * @return {number[]}
 * 
 * 动态规划 + 移除最后一个 1
 */
var countBits = function(num) {
  let arr = [0];

  for (var i = 1; i <= num; i++) {
    arr[i] = arr[i & (i - 1)] + 1;
  }

  return arr;
};