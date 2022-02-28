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
      if (cur.right !== null) stack.push(cur.right)
      if (cur.left !== null) stack.push(cur.left)
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
