/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 对于出现 3 次的数字，第 i 位上不管是 0 还是 1 在余 3 之后都是 0
 */
var singleNumber = function(nums) {
  let result;

  for (let i = 0; i < 32; i++) {
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
      // 所有 num 第 i 位的和
      sum += (nums[j] >> i) & 1;
    }
    // result 的第 i 位
    result ^= (sum % 3) << i;
  }

  return result;
}