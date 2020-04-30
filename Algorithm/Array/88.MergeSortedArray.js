// 从前面排会没有地方存大值，从后面开始排就不会有这个问题
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let post = m + n - 1;

    while (post > -1) {
        if (i > -1 && nums1[i] > nums2[j] || j < 0) {
            nums1[post] = nums1[i--];
        } else {
            nums1[post]= nums2[j--];
        }
        post--;
    }

    return nums1
};