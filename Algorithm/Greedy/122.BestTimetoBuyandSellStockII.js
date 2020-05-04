// greedy, dp
// greedy: 只要前一天价格比后一天低就可以买入并卖出
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let benefits = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            benefits += prices[i + 1] - prices[i]
        }
    }
    return benefits
};
