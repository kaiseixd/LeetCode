// greedy
// 把 i === 0 的情况直接放到 for 循环里处理了
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0
    let currentStepReach = 0
    let maxReach = 0

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(nums[i] + i, maxReach)
        if (i === currentStepReach) {
            steps++
            currentStepReach = maxReach
        }
    }

    return steps
};

// 从后往前贪心为什么是 n2?