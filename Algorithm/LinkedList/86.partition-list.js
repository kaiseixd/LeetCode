/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let headDummy = new ListNode(-1);
  let tailDummy = new ListNode(-1);
  let headPointer = headDummy;
  let tailPointer = tailDummy;
  let cur = head;

  while (cur) {
    if (cur.val < x) {
      headPointer.next = cur;
      headPointer = cur;
    } else {
      tailPointer.next = cur;
      tailPointer = cur;
    }
    cur = cur.next;
  }

  tailPointer.next = null;
  headPointer.next = tailDummy.next;

  return headDummy.next;
};