// 二分搜索树 --> 又叫平衡二叉树 --> 根节点大于左子树所有节点的值，小于右子树所有节点的值
class TreeNode {
  constructor (el) {
    this.el = el
    this.left = null
    this.right = null
  }
}

class BST {
  constructor () {
    this.root = null
    this.size = 0
  }

  size () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  // add (el) {
  //   if (this.root === null) {
  //     this.root = new TreeNode(el)
  //     this.size ++
  //     return
  //   }
  //   this._add(this.root, el)
  // }

  // _add (node, el) {
  //   if (node.el === el) return
  //   if (node.el < el && node.left === null) {
  //     node.left = new TreeNode(el)
  //     this.size ++
  //     return
  //   } else if (node.el > el && node.right === null) {
  //     node.right = new TreeNode(el)
  //     this.size ++
  //     return
  //   } else if (node.el < el) {
  //     this._add(node.left, el)
  //   } else {
  //     this._add(node.right, el)
  //   }
  // }

  // 比上面的实现简洁
  add (el) {
    this.root = this._add(this.root, el)
  }

  _add (node, el) {
    if (node === null) {
      this.size ++
      return new TreeNode(el)
    }
    if (el < node.el) node.left = this._add(node.left, el)
    else if (el > node.el) node.right = this._add(node.right, el)
    return node
  }

  // 添加节点的非递归实现
  add2 (el) {
    if (this.root === null) {
      this.size ++
      this.root = new TreeNode(el)
      return
    }
    let node = this.root
    while (node !== null) {
      if (node.el === el) return
      if (node.el > el && node.left === null) {
        node.left = new TreeNode(el)
        this.size ++
        return
      } else if (node.el < el && node.right === null) {
        node.right = new TreeNode(el)
        this.size ++
        return
      }
      if (node.el > el) node = node.left
      else if (node.el < el) node = node.right
    }
  }

  // 查找 BST 中最小的节点
  minumum () {
    if (this.size === 0) throw new RangeError('BST is empty!')
    return this._minumum(this.root)
  }

  _minumum (root) {
    if (root.left === null) return root
    return this._minumum(root.left)
  }

  // 删除 BST 中最小的节点
  removeMin () {
    const min = this.minumum()
    this.root = this._removeMin(this.root)
    return min
  }

  // 删除掉以 node 为根的二分搜索树的最小节点
  // 返回删除后的二分搜索树的根节点
  _removeMin (node) {
    if (node.left === null) {
      const right = node.right
      node.right = null
      this.size --
      return right
    }

    node.left = this._removeMin(node.left)
    return node
  }

  maximum () {
    if (this.size === 0) throw new RangeError('BST is empty!')
    return this._maximum(this.root)
  }

  _maximum (node) {
    if (node.right === null) return node
    return this._maximum(node.right)
  }

  removeMax () {
    const max = this.maximum()
    this.root = this._removeMax(this.root)
    return max
  }

  _removeMax (node) {
    if (node.right === null) {
      const left = node.left
      node.left = null
      return left
    }

    node.right = this._removeMax(node.right)
    return node
  }

  contains (el) {
    return this._contains(this.root, el)
  }

  _contains (node, el) {
    if (node === null) return false
    if (node.el === el) return true
    if (node.el > el) return this._contains(node.left, el)
    else return this._contains(node.right, el)
  }

  // 查找节点的非递归实现
  contains2 (el) {
    if (this.root === null) return false
    let node = this.root
    while (node !== null) {
      if (node.el === el) return true
      if (node.el > el) {
        if (node.left === null) return false
        node = node.left
      } else {
        if (node.right === null) return false
        node = node.right
      }
    }
  }

  // 前序遍历
  preOrder () {
    this._preOrder(this.root)
  }

  _preOrder (node) {
    if (node === null) {
      return
    }
    console.log(node.el)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  // 前序遍历的非递归实现
  perOrder2 () {
    if (this.root === null) return
    let cur
    const stack = [] // 使用栈对节点进行缓存，通过模拟系统栈的调用方式来实现前序遍历
    stack.push(this.root)
    while (stack.length) {
      cur = stack.pop()
      console.log(cur.el)
      if (cur.left !== null) stack.push(cur.left)
      if (cur.right !== null) stack.push(cur.right)
    }
  }

  // 中序遍历 中序遍历后输出的树节点是有序的
  inOrder () {
    this._inOrder(this.root)
  }

  _inOrder (node) {
    if (node === null) return
    this._inOrder(node.left)
    console.log(node.el)
    this._inOrder(node.right)
  }

  // 中序遍历的非递归实现
  inOrder2 () {
    const stack = []
    let node = this.root
    while (node !== null) {
      stack.push(node)
      node = node.left
    }
    while (stack.length) {
      let cur = stack.pop()
      console.log(cur.el)
      node = cur.right
      if (node !== null) {
        stack.push(node)
        node = node.left
      }
    }
  }

  // 后序遍历 后序遍历可用于释放二分搜索树的内存
  postOrder () {
    this._postOrder(this.root)
  }

  _postOrder (node) {
    if (node === null) return
    this._postOrder(node.left)
    this._postOrder(node.right)
    console.log(node.el)
  }

  // 后序遍历的非递归实现
  postOrder2 () {
    const excuteStack = [] // 执行栈
    const recordStack = [] // 记录栈 用于记录当前节点是否存在右孩子
    const pushLeft = (node, stack) => {
      while (node !== null) {
        stack.push(node)
        node = node.left
      }
    }

    pushLeft(this.root, excuteStack)
    while (excuteStack.length) {
      const cur = excuteStack.pop()
      if (cur.right === null) {
        console.log(cur.el)
      } else if (recordStack[recordStack.length - 1] === cur) {
        recordStack.pop()
        console.log(cur.el)
      } else {
        excuteStack.push(cur)
        recordStack.push(cur)
        pushLeft(cur.right, excuteStack)
      }
    }
  }

  // 层序遍历
  levelOrder () {
    const queue = []
    let node = this.root
    queue.push(node)
    while (queue.length) {
      const cur = queue.shift()
      console.log(cur.el)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
  }

  toString () {
    let ret = ''
    return this._generateBSTString(this.root, 0, ret)
  }

  _generateBSTString (node, deep, ret) {
    if (node === null) {
      ret += (this._generateDeepString(deep) + 'null\n')
      return ret
    }
    ret += (this._generateDeepString(deep) + node.el + '\n')
    ret = this._generateBSTString(node.left, deep + 1, ret)
    ret = this._generateBSTString(node.right, deep + 1, ret)
    return ret
  }

  _generateDeepString (deep) {
    return '**'.repeat(deep)
  }
}

module.exports = BST
