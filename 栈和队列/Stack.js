const CustomArray = require('./CustomArray')

class Stack extends CustomArray {
  constructor (capacity) {
    if (typeof capacity === 'number') super(capacity)
    else super(0)
  }

  push (el) {
    return this.addLast(el)
  }

  pop () {
    return this.removeLast()
  }

  peek () {
    return this.getLast()
  }

  toString () {
    let ret = '[Stack]: [\n\t'
    for (let i = 0; i < this.size - 1; i ++) {
      ret += this.data[i].toString() + '\n\t'
    }
    ret += `${this.data[this.size - 1]}\n]`
    return ret
  }
}

module.exports = Stack
