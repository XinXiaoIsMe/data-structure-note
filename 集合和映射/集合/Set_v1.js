// 使用树实现集合
const Tree = require('../../树/BST')

class Set {
  constructor () {
    this.data = new Tree()
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
    this.data.add(el)
  }

  remove (el) {
    return this.data.remove(el)
  }
}

module.exports = Set
