// Two-Pointer
// 移动大值指针总是会比之前小，所以移动小的

var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i !== j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};
