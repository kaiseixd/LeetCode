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
var sortList = function(head) {
  return mergeSort(head);
};

function findMiddle(node) {
  let slow = node;
  let fast = node.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function mergeSort(node) {
  if (!node || !node.next) return node;

  let middle = findMiddle(node);
  let left = node;
  let right = middle.next;
  middle.next = null;

  return _merge(mergeSort(left), mergeSort(right));
}

function _merge(node1, node2) {
  let dummy = new ListNode(-1);
  let pointer = dummy;

  while (node1 || node2) {
    if (!node2 || node1 && node1.val < node2.val) {
      pointer.next = node1;
      pointer = node1;
      node1 = node1.next;
    } else {
      pointer.next = node2;
      pointer = node2;
      node2 = node2.next;
    }
  }

  return dummy.next;
}
