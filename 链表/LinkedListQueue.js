class LinkNode {
  constructor (e = null, next = null) {
    this.e = e
    this.next = next
  }

  toString () {
    return this.e.toString()
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  enqueue (e) {
    if (this.size === 0) {
      this.head = this.tail = new LinkNode(e)
    } else {
      this.tail.next = new LinkNode(e)
      this.tail = this.tail.next
    }
    this.size ++
  }

  dequeue () {
    if (this.size === 0) throw new RangeError('cannot dequeue element from empty queue.')

    const ret = this.head
    this.head = this.head.next
    if (this.head === null) this.tail = null
    this.size --
    return ret
  }

  getFront () {
    return this.head
  }

  toString () {
    let ret = '[Queue]: front '
    let cur = this.head
    for (; cur !== null; cur = cur.next) {
      ret += cur.toString() + ' => '
    }
    ret += 'NULL tail'
    return ret
  }
}

module.exports = Queue
