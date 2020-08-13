/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return head;
  let pointer;
  
  pointer = head;
  while (pointer) {
    let temp = pointer.next;
    let newNode = pointer.next = new ListNode(pointer.val);
    pointer = newNode.next = temp;
  }

  pointer = head;
  while (pointer) {
    if (pointer.random) {
      pointer.next.random = pointer.random.next;
    }
    pointer = pointer.next.next;
  }

  pointer = head;
  let cloneHead = head.next;
  while (pointer && pointer.next) {
    let temp = pointer.next;
    pointer.next = pointer.next.next;
    pointer = temp;
  }

  return cloneHead;
};