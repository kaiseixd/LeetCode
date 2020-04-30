// 环状替换
var rotate = function(nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let pointer = 0; count < nums.length; pointer++) {
        let current = pointer;
        let currentValue = nums[pointer];
        do {
            let next = (current + k) % nums.length;
            let nextValue = nums[next];
            nums[next] = currentValue;
            currentValue = nextValue;
            current = next;
            count++
        } while (pointer !== current);
    }
    return nums;
};

// 三次翻转
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
    }
}