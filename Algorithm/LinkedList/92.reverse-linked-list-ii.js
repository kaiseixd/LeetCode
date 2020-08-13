/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  // 反转头部前一个节点
  let pre = dummy;
  let pointer = head;

  while (m - 1 > 0) {
    m--;
    n--;
    pre = pointer;
    pointer = pointer.next;
  }

  // 反转尾部
  let post = pointer;
  let prev = pointer;
  let next = pointer.next;
  while (n - 1 > 0) {
    n--;
    let temp = next.next;
    next.next = prev;
    prev = next;
    next = temp;
  }

  pre.next = prev;
  post.next = next;

  return dummy.next;
};