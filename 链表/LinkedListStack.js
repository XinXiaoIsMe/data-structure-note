const LinkedList = require('./LinkedList')

class Stack {
  constructor () {
    this.data = new LinkedList()
  }

  push (e) {
    this.data.addFirst(e)
  }

  pop () {
    return this.data.removeFirst()
  }

  peek () {
    return this.data.getFirst()
  }

  toString () {
    return `[Stack]: top ${this.data.toString()}`
  }
}

module.exports = Stack
