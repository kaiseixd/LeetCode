// greedy
// 从前往后
var canJump = function(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false
        max = Math.max(max, i + nums[i])
    }
    return max >= nums.length - 1
};

// 也可以从后往前，每次更新 endReachable
var canJump = function(nums) {
    let endReachable = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= endReachable) {
            endReachable = i
        }
    }
    return endReachable === 0
};