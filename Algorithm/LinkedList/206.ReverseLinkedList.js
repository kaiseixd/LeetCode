var reverseList = function(head) {
  if (!head || !head.next) return head;
  
  let prev = null;
  let cur = head;
  let next = head.next;

  while (next) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next.next;
  }

  cur.next = prev;

  return cur;
};