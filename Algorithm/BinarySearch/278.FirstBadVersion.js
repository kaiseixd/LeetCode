/**
 * @param {function} isBadVersion()
 * @return {function}
 * 模板3，left是last true，right是first false
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0;
    let right = n;

    while (left + 1 < right) {
      let mid = left + (right - left >> 1);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }

    return right;
  };
};