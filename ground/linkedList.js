function atl(array) {
  let linkedList;
  let currentNode;

  array.forEach(val => {
    if (!linkedList) {
      currentNode = linkedList = new ListNode(val);
    } else {
      let newNode = currentNode.addAtTail(val);
      currentNode = newNode;
    }
  });

  return linkedList;
}

function lta(head) {
  let array = [];
  let node = head;

  while (node) {
    array.push(node.val);
    node = node.next;
  }
  
  return array;
}