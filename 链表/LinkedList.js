class LinkNode {
  constructor (e = null, next = null) {
    this.e = e
    this.next = next
  }

  toString () {
    return this.e.toString()
  }
}

// 不带虚拟头结点
// class LinkedList {
//   constructor () {
//     this.head = null
//     this.size = 0
//   }

//   getSize () {
//     return this.size
//   }

//   isEmpty () {
//     return this.size === 0
//   }

//   addFirst (e) {
//     // const node = new LinkNode(e)
//     // node.next = this.head
//     // this.head = node
//     // 上面三行代码等价于下面这句
//     this.head = new LinkNode(e, this.head)
//     this.size ++
//   }

//   add (index, e) {
//     if (index < 0 && index >= this.size) throw new RangeError('Add failed. Inlegal index')

//     if (index === 0) return this.addFirst(e)

//     let prev = this.head
//     for (let i = 0; i < index - 1; i ++) {
//       prev = prev.next
//     }
//     // const node = new LinkNode(e)
//     // node.next = prev.next
//     // prev.next = node
//     prev.next = new LinkNode(e, prev.next)
//     this.size ++
//   }

//   addLast (e) {
//     this.add(this.size, e)
//   }
// }

// 带虚拟头结点
class LinkedList {
  constructor () {
    this.dummyHead = new LinkNode()
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  add (index, e) {
    if (index < 0 && index >= this.size) throw new RangeError('Add failed. Inlegal index')

    let prev = this.dummyHead
    for (let i = 0; i < index; i ++) {
      prev = prev.next
    }
    // const Node = new LinkNode(e)
    // Node.next = prev.next
    // prev.next = Node
    // 上面三行代码等价于下面这句
    prev.next = new LinkNode(e, prev.next)
    this.size ++
  }

  addFirst (e) {
    this.add(0, e)
  }

  addLast (e) {
    this.add(this.size, e)
  }

  get (index) {
    if (index < 0 || index >= this.size) throw new RangeError('Add failed. Inlegal index')

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i ++) {
      cur = cur.next
    }
    return cur.e
  }

  getFirst () {
    return this.get(0)
  }

  getLast () {
    return this.get(this.size - 1)
  }

  set (index, e) {
    if (index < 0 || index >= this.size) throw new RangeError('Add failed. Inlegal index')

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i ++) {
      cur = cur.next
    }
    cur.e = e
  }

  contains (e) {
    let cur = this.dummyHead.next
    while (cur !== null) {
      if (cur.e === e) return true
      cur = cur.next
    }
    return false
  }

  remove (index) {
    let prev = this.dummyHead
    for (let i = 0; i < index; i ++) {
      prev = prev.next
    }
    const node = prev.next
    prev.next = prev.next.next
    node.next = null
    this.size --
  }

  removeFirst () {
    this.remove(0)
  }

  removeLast () {
    this.remove(this.size - 1)
  }

  removeElement (e) {
    let cur = this.dummyHead
    while (cur.next) {
      if (cur.next.e === e) cur.next = cur.next.next
      else cur = cur.next
    }
  }

  toString () {
    let ret = ''
    let cur = this.dummyHead.next
    for (; cur !== null; cur = cur.next) {
      ret += cur.toString() + ' => '
    }
    ret += 'NULL'
    return ret
  }
}

module.exports = LinkedList
