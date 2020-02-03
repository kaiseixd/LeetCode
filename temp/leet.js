// 206.ReverseLinkedList 
// 就地逆置 重写每个 node 的 next 即可
var reverseList = function(head) {
  var oldHead = head
  var newHead = null
  var temp // next
  while (oldHead !== null) {
    temp = oldHead.next
    oldHead.next = newHead
    newHead = oldHead
    oldHead = temp
  }
};

// 21.MergeTwoSortedLists
// 正常解法就是 new 一个 ListNode
// 妖怪解法：
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

// 160.IntersectionofTwoLinkedLists
// two-pointer
// 因为 diffA + diffB + intersection === diffB + diffA + intersection
var getIntersectionNode = function(headA, headB) {
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

// 142.LinkedListCycleII
// two-pointer
// 使用一个 two-step 指针和一个 one-step 指针，追上说明是重复
// 快指针走了 '直线路程 + 环的一部分 + 整个环'
// 慢指针走了 '直线路程 + 环的一部分'
// 说明 '环' === '直线路程 + 环的一部分'
// 说明 '环剩下的部分' === '直线路程'
var detectCycle = function(head) {
  if(!head || !head.next) return null
  var slow = head
  var fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break
  }
  if (slow === fast) {
    slow = head
    while (fast != slow) {
      fast = fast.next
      slow = slow.next
    }
    return slow
  }
  return null
}

// 138.CopyListWithRandomPointer
// ?

// ---------------- 动态规划 ----------------
// fib with dp
function fib(n) {
  let nums = new Array(n + 1).fill(null)
  nums[0] = 0
  nums[1] = 1
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
  }
  return nums[n]
}

// 55.JumpGame
// 每次贪心地跳到最远
var canJump = function(nums) {
  var maxIndex = nums[0]
  for (var i = 0; i <= maxIndex; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i])
    if (maxIndex >= nums.length - 1) return true
  }
  return false
}

// 70.ClimbingStairs
arr[i] = arr[i - 1] + arr[i - 2]

// 121.Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    min = Math.max(min, prices[i])
    profit = Math.max(prices[i] - min, profit)
  }
  return profit
}

// 198.HouseRobber

// ---------------- 回溯 ----------------
// ?.输出数字的所有组合 -> 78
var nums = '123'
var arr = []

function count(nums, i = 0) {
  for (; i < nums.length; i++) {
    arr.push(nums[i])
    console.log(arr)
    count(nums, i+1)
    arr.pop()
  }
}

// 78.Subsets
var subsets = function(nums) {
  let res = []
  
  helper([], 0)
  return res

  function helper(array, index) {
    res.push(array)
    for (let i = index; i < nums.length; i++) {
      let arr = copyArr(array)
      arr.push(nums[i])
      helper(arr, i + 1)
    }
  }

  function copyArr(array) {
    return array.slice(0, array.length)
  }
};

// 40.CombinationSumII
// 跟上面的例子相比没有了for，所以最后要加一个bt(i + 1)
// sum
// 22%，两个优化：使用所需值target来代替计算sum，如果值是一样的就可以++i
var combinationSum2 = function(candidates, target) {
  var res = []
  var arr = []
  var sum = 0
  var map = new Map()
  var candi = candidates.sort()
  var len = candi.length
  bt(0)
  return res

  function bt(i) {
    if (sum > target || i >= len) return
    arr.push(candi[i])
    sum += candi[i]
    if (sum === target && !map.has(arr.join(','))) {
      res.push(arr.slice())
      map.set(arr.join(','), 1)
    }
    bt(i + 1)
    sum -= candi[i]
    arr.pop()
    bt(i + 1)
  }
};

// ---------------- 二叉树 ----------------
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 深度优先遍历
// 递归
function traversal(root) {
  if (root) {
    console.log(root.val)
    traverse(root.left)
    traverse(root.right)
  }
}

// 使用栈模拟递归
function preorderTraversal(root) {
  if (!root) return []
  let arr = []
  let stack = [root]

  while (stack.length) {
    let node = stack.pop()
    if (node) {
      if (typeof node === 'number') arr.push(node)
      else {
        stack.push(node.val)
        // 需要先push右边再push左边
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
      }
    }
  }

  return arr
};

function pre(root) {
  var stack = [root]
  while (stack.length) {
    var node = stack.pop()
    console.log(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}

function mid(root) {
  if (root) {
    let stack = [];
    let res = [];
    // 所以首先应该先把最左边节点遍历到底依次 push 进栈
    // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
    while (stack.length > 0 || root) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        res.push(root.val)
        root = root.right;
      }
    }

    return res
  }
}

function pos(root) {
  if (root) {
    let stack1 = [];
    let stack2 = [];
    // 对于输出结果的 stack2 来说
    // 应该先 push 根节点，然后 push 右节点，最后 push 左节点
    stack1.push(root);
    while (stack1.length > 0) {
      root = stack1.pop();
      stack2.unshift(root.val);
      if (root.left) {
        stack1.push(root.left);
      }
      if (root.right) {
        stack1.push(root.right);
      }
    }
    
    return stack2
  }
} 

// Binary Tree Level Order Traversal
var levelOrder = function(root) {
  if (!root) return []
  let arr = []
  let queue = [root]
  let level = 0

  while (queue.length) {
    let node = queue.shift()

    if (typeof node === 'number') level = node
    else if (node) {
      if (!arr[level]) arr[level] = []
      arr[level].push(node.val)
      queue.push(level + 1)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return arr
};

// 107.Binary Tree Level Order Traversal II
var levelOrderBottom = function(root) {
  let res = []
  traverse(root, 0)
  return res.reverse()
  
  function traverse(node, depth) {
    if (!node) return
    traverse(node.left, depth + 1)
    traverse(node.right, depth + 1)
    if (!res[depth]) res[depth] = [node.val]
    else res[depth].push(node.val)
  }
};

// 树的深度 Maximum Depth of Binary Tree
var maxDepth = function(root) {
  if (!root) return 0 
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 204.Invert Binary Tree
var invertTree = function(root) {
  let tmp;
  if (!root) return root;
  if (root.left || root.right) {
    tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }
  return root;
};

// ---------------- 二分查找 ----------------
// template 1
// 初始条件：left = 0, right = length-1
// 终止：left > right
// 向左查找：right = mid-1
// 向右查找：left = mid+1
function binarySearch(nums, target) {
  if (nums === null || nums.length ===  0) return -1
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) left = mid + 1
    else right = mid - 1
  }

  return -1
}

// 35. Search Insert Position
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  if (target > nums[nums.length - 1]) {
    return nums.length
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
