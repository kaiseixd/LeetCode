// 若总油量 < 0 则必定无法循环
// 在油量最低的时候的 benefit > 0 点即是起始点

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currentGas = 0
    let minGas = 0
    let minGasIndex = 0
    gas.forEach((g, i) => {
        const benefit = g - cost[i]
        if (benefit > 0) {
            if (currentGas < minGas) {
                minGas = currentGas
                minGasIndex = i
            }
        }
        currentGas += benefit
    })
    if (currentGas < 0) return -1
    else return minGasIndex
};