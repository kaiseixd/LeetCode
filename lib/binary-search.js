/**
 * @param {*} nums 
 * @param {*} target 
 * 
 * 模板四点要素
 * 1、初始化：start = 0、end= length - 1
 * 2、循环退出条件：start + 1 < end
 * 3、比较中点和目标值：A[mid] ==、 <、> target
 * 4、判断最后两个元素是否符合：A[start]、A[end] ? target
 */
function bs3(nums, target) {
  if (!nums || !nums.length) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + (right - left >> 1);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
}

/**
 * 搜索重复的左边第一个(bs3)
 */
function searchLeftest(nums, target) {
  if (!nums || !nums.length) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + (right - left >> 1);

    if (nums[mid] < target) {
      left = mid
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
}

/**
 * 不需要找第一个、最后一个位置、或者是没有重复元素的情况下使用的简洁模板
 */
function bs1(nums, target) {
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
