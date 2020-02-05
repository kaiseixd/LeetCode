// 142.LinkedListCycleII
// two-pointer
// 使用一个 two-step 指针和一个 one-step 指针，追上说明是重复
// 快指针走了 '直线路程 + 环的一部分 + 整个环'
// 慢指针走了 '直线路程 + 环的一部分'
// 说明 '环' === '直线路程 + 环的一部分'
// 说明 '环剩下的部分' === '直线路程'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null
  var slow = head
  var fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break
  }
  if (slow === fast) {
    slow = head
    while (fast != slow) {
      fast = fast.next
      slow = slow.next
    }
    return slow
  }
  return null
}
