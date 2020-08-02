function att(array) {
  let tree = new TreeNode(null);
  let currentNode = tree;
  let nodeStack = [];
  let flag = 0;

  array.forEach(val => {
    if (flag === 0) {
      currentNode.val = val;
      flag++;
    } else if (flag === 1) {
      let node = currentNode.left = new TreeNode(val);
      nodeStack.push(node);
      flag++;
    } else if (flag === 2) {
      let node = currentNode.right = new TreeNode(val);
      nodeStack.push(node);
      flag = 1;

      currentNode = nodeStack.shift();
    }
  });

  return tree;
}

function tta(tree) {
  let array = [];
  let treeStack = [tree];

  while (treeStack.length) {
    let node = treeStack.shift();
    array.push(node.val);

    if (node.left) {
      treeStack.push(node.left);
    }
    if (node.right) {
      treeStack.push(node.right);
    }
  }

  return array;
}