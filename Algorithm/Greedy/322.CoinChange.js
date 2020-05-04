// greedy: https://leetcode-cn.com/problems/coin-change/solution/322-by-ikaruga/
// 贪心：优先使用大硬币
// 剪枝：一旦超出res就return
// 使用dfs确保特殊情况能够回溯：[10,9,1], 18，这时候两个9是最优解
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res = Number.MAX_SAFE_INTEGER
    let sorted = coins.sort((a, b) => b - a)
    dfs(sorted, amount, 0, 0)
    return res === Number.MAX_SAFE_INTEGER ? -1 : res

    function dfs(coins, amount, index, count) {
        if (amount === 0) {
            res = Math.min(res, count)
            return
        }
        if (amount < 0) return
        if (index === coins.length) return
        // 不从后面开始遍历会超出时间
        for (let times = Math.floor(amount / coins[index]); times >= 0 && (count + times < res); times--) {
            dfs(coins, amount - times * coins[index], index + 1, count + times, res)
        }
    }
};
