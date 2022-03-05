// 基于链表实现映射
class Node {
  constructor (key = null, value = null, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}

class Map {
  constructor () {
    this.dummyHead = new Node()
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  getNode (key) {
    let cur = this.dummyHead.next
    while (cur !== null) {
      if (cur.key === key) return cur
      cur = cur.next
    }
    return null
  }

  contains (key) {
    return !!this.getNode(key)
  }

  add (key, value) {
    const node = this.getNode(key)
    if (node === null) {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next)
      this.size ++
    } else {
      node.value = value
    }
  }

  remove (key) {
    let node = this.dummyHead
    while(node.next !== null) {
      if (node.next.key === key) break
      node = node.next
    }
    if (node.next !== null) {
      const delNode = node.next
      node.next = delNode.next
      delNode.next = null
      this.size --
      return delNode.value
    }
    return null
  }

  get (key) {
    const node = this.getNode(key)
    return node === null ? null : node.value
  }

  set (key, value) {
    const node = this.getNode(key)
    if (node === null) throw new Error(key + ' doesn\'n exist!')
    node.value = value
  }
}

module.exports = Map
