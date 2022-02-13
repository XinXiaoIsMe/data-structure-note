class LinkNode {
  constructor (el = null, next = null) {
    this.el = el
    this.next = next
  }

  toString () {
    return this.el.toString()
  }
}

/**
 * 使用递归的方式
 */
class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getSize () {
    return this.size
  }

  get (index) {
    if (index < 0 || index > this.size) throw new RangeError('Get failed. Illegal index.')

    return this._get(index, this.head)
  }

  _get (index, node) {
    if (index === 0) return node.el

    return this._get(index - 1, node.next)
  }

  getFirst () {
    return this.get(0)
  }

  getLast () {
    return this.get(this.size)
  }

  set (index, el) {
    if (index < 0 || index >= this.size) throw new RangeError('Add failed. Illegal index.')

    this._set(index, el, this.head)
  }

  _set (index, el, node) {
    if (index === 0) {
      node.el = el
      return
    }

    this._set(index - 1, el, node.next)
  }

  setFirst (el) {
    this.set(0, el)
  }

  setLast (el) {
    this.set(this.size, el)
  }

  contains (el) {
    return this._contains(el, this.head)
  }

  _contains (el, node) {
    if (node === null) return false

    if (node.el === el) return true

    return this._contains(el, node.next)
  }

  add (el, index) {
    if (index < 0 || index > this.size) throw new RangeError('Add failed. Illegal index.')

    this.head = this._add(this.head, el, index)
    this.size ++
  }

  _add (node, el, index) {
    if (index === 0) return new LinkNode(el, node)
    node.next = this._add(node.next, el, index - 1)
    return node
  }

  addFirst (el) {
    this.add(el, 0)
  }

  addLast (el) {
    this.add(el, this.size)
  }

  remove (index) {
    if (index < 0 || index >= this.size) throw new RangeError('Add failed. Illegal index.')

    const ret = this._remove(index, this.head)
    this.head = ret.keys().next().value
    this.size --
    return ret.get(this.head)
  }

  _remove (index, node) {
    // 这里注意，由于需要返回被删除的节点的值，所以使用map进行保存
    if (index === 0) return new Map([[node.next, node.el]])
    const ret = this._remove(index - 1, node.next)
    node.next = ret.keys().next().value // 利用迭代器的特性取出key值
    return new Map([[node, ret.values().next().value]])
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeElement (el) {
    this.head = this._removeElement(el, this.head)
  }

  // 没有返回值的情况下可以使用双指针
  // removeElement (el, pre, next) {
  //   if (typeof pre === 'undefined') {
  //     next = this.head
  //     pre = new LinkNode(null, next)
  //   }
  //   if (next === null) return
  //   if (next.el === el) {
  //     if (this.head === next) {
  //       // next = next.next
  //       // pre.next = next
  //       // this.head = next
  //       this.head = pre.next = next = next.next
  //     } else {
  //       // next = next.next
  //       // pre.next = next
  //       pre.next = next = next.next
  //     }
  //   } else {
  //     pre = next
  //     next = next.next
  //   }
  //   this.removeElement(el, pre, next)
  // }

  _removeElement (el, node) {
    if (node === null) return null
    node.next = this._removeElement(el, node.next) // 注意要先执行这一步求出移除el后子链表的头结点
    if (node.el === el) {
      this.size --
      return node.next
    }
    return node
  }

  toString () {
    let ret = '[LinkedList]: '
    let cur = this.head
    while (cur !== null) {
      ret += cur.toString() + ' => '
      cur = cur.next
    }
    ret += 'NULL'
    return ret
  }
}

module.exports = LinkedList
