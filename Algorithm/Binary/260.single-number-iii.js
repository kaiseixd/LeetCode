/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 通过 mask 将问题拆分成两个 SingleNumber I
 */
var singleNumber = function(nums) {
  let xor = 0;
  // 得到 a ^ b
  nums.forEach(num => xor ^= num);

  // 得到最后一个 1 的位，该位上 a 和 b 其中一个是 1，其中一个是 0
  let mask = xor & (-xor);

  let result = [0, 0];
  nums.forEach(num => {
    // 该位上是 1 的数字 & mask === 0，所以 a 和 b 必定存入不同的 result
    if ((num & mask) === 0) {
      result[0] ^= num;
    } else {
      result[1] ^= num;
    }
  });

  return result;
};