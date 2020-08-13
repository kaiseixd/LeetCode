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
var deleteDuplicates = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = head;

  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      let sameVal = fast.val;
      while (fast && fast.val === sameVal) {
        fast = fast.next;
      }
      slow.next = fast;
    } else {
      slow = fast;
      fast = fast.next;
    }
  }

  return dummy.next;
};