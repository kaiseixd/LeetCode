/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 移除最后一个 1
 */
var rangeBitwiseAnd = function(m, n) {
  while (m < n) {
    n &= (n - 1);
  }

  return m & n;
};

/* ======================== */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let count = 0;

  while (m !== n) {
    // 向左位移以后不相等，说明最低位必定存在 0，按位与以后该位必定为 0
    m >>= 1;
    n >>= 1;
    count++;
  }
  
  return m << count;
};