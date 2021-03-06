/**
 * 异或基本操作
 * 
 * a = 0 ^ a = a ^ 0
 * 0 = a ^ a
 * a = a ^ b ^ b
 */

/**
 * 交换两个数
 * 
 * a = a ^ b
 * b = a ^ b (-> a ^ b ^ b)
 * a = a ^ b (-> a ^ b ^ a ^ b ^ b -> a ^ b ^ a -> b)
 */

/**
 * 移除最后一个1（Brian Kernighan 算法）
 * 
 * a = n & (n - 1)
 */

/**
 * 获取最后一个1
 * 
 * diff = (n & (n - 1)) ^ n
 * 
 * 或
 * 
 * diff = n & (-n)
 */
