class ListNode {
  constructor(val, next) {
    this.val = val || null;
    this.next = next || null;
  }

  addAtTail(val) {
    let node = this;
    while (node.next) {
      node = node.next;
    }
    return node.next = new ListNode(val);
  }
}
