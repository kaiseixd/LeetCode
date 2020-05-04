// Two-Pointer
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let ptrA = headA
  let ptrB = headB
  
  while (ptrA !== ptrB) {
    if (ptrA === null) {
      ptrA = headB
    } else {
      ptrA = ptrA.next
    }
    if (ptrB === null) {
      ptrB = headA
    } else {
      ptrB = ptrB.next
    }
  }
  
  return ptrA
};