const CustomArray = require("./CustomArray")

class Queen extends CustomArray {
  constructor (capacity = 0) {
    super(capacity)
  }

  enqueue (value) {
    return this.addLast(value)
  }

  dequeue () {
    return this.removeFirst()
  }

  getFront () {
    return this.get(0)
  }

  toString () {}
}

module.exports = Queen
