// Two-Pointer

// Follow up:
// Could you do it in O(n) time and O(1) space?

// 快指针走到底的时候，慢指针刚好在中间
// 此时将慢 list reverse 并将快指针移回 head
// 比较是否相等

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  
  let mid = findMid(head);
  let right = reverse(mid);
  let left = head;

  while (right) {
    if (right.val !== left.val) return false;
    left = left.next;
    right = right.next;
  }

  return true
};

function findMid(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    return slow.next;
  } else {
    return slow;
  }
}

function reverse(head) {
  let oldHead = head
  let newHead = null
  let nextHead
  while (oldHead !== null) {
    nextHead = oldHead.next
    oldHead.next = newHead
    newHead = oldHead
    oldHead = nextHead
  }
  return newHead
}