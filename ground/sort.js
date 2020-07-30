/**
 * 归并排序
 * mergeSort: 从中间拆分数组
 * _merge: 合并两个排序数组
 */
function _merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return result.concat(leftArr).concat(rightArr);
}

function mergeSort(array) {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return _merge(mergeSort(left), mergeSort(right));
}