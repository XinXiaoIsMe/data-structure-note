const LinkList = require('../../链表/LinkedList')

class Set {
  constructor () {
    this.data = new LinkList()
  }

  getSize () {
    return this.data.getSize()
  }

  isEmpty () {
    return this.data.isEmpty()
  }

  contains (el) {
    return this.data.contains(el)
  }

  add (el) {
    if (this.contains(el)) return
    this.data.addFirst(el)
  }

  remove (el) {
    this.data.removeElement(el)
  }
}

module.exports = Set
