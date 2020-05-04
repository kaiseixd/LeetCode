// Two-Pointer
// 数组排序 NlogN + 遍历数组 N * 双指针遍历 N = N ** 2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let resultList = [];
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (sorted[i] > 0) break;
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let pre = i + 1;
        let post = nums.length - 1;

        while (pre < post) {
            let res = sorted[i] + sorted[pre] + sorted[post];
            if (res === 0) {
                resultList.push([sorted[i], sorted[pre], sorted[post]]);
                while (nums[pre] === nums[pre + 1]) {
                    pre++;
                }
                while (nums[post]=== nums[post - 1]) {
                    post--;
                }
                pre++;
                post--;
            } else if (res > 0) {
                post--;
            } else {
                pre++;
            }
        }
    }

    return resultList;
};
