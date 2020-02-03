var reverseList = function(head) {
  if (!head) return null
  var node = head
  while (head.next) {
    let temp = head.next.next
    let lastNode = node
    node = head.next
    head.next.next = lastNode
    head.next = temp
  }
  return node
};
