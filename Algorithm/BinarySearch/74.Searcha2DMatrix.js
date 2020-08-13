/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 不是好写法，有待更新
 * 可以通过 row * col 将矩阵坐标转换成数组坐标
 * todo...
 */
var searchMatrix = function(matrix, target) {
  const mIndex = findMIndex(matrix, target);
  if (mIndex === -1) return false;
  const nIndex = findNIndex(matrix[mIndex], target);
  if (nIndex === -1) return false;
  else return true;
};

function findMIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + (right - left >> 1);

    if (nums[mid][0] === target) {
      return mid;
    } else if (nums[mid][0] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}

function findNIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + (right - left >> 1);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}