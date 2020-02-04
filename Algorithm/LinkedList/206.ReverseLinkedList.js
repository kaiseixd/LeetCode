var reverseList = function (head) {
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
