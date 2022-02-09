/**
 * 版本2：不使用 size
 */

class LoopQueen {
  constructor (capacity = 1) {
    this.data = new Array(capacity + 1)
    this.front = 0
    this.tail = 0
  }

  getCapacity () {
    return Math.max(this.data.length - 1, 0)
  }

  isEmpty () {
    return this.front === this.tail
  }

  getFront () {
    if (this.isEmpty()) throw new RangeError('cannot get the front element of empty queue.')
    return this.data[this.front]
  }

  enqueue (el) {
    if (
      this.getCapacity() > 0 &&
      (this.tail + 1) % this.data.length === this.front
    ) {
      this.resize(this.getCapacity() * 2)
    }
    this.data[this.tail] = el
    this.tail = (this.tail + 1) % this.data.length
  }

  dequeue () {
    if (this.isEmpty()) throw new RangeError('cannot dequeue element from an empty queue.')

    const size = this.tail > this.front
      ? this.tail - this.front
      : this.tail + this.data.length - this.front
    if (
      this.getCapacity() > 0 &&
      size <= Math.floor(this.getCapacity() / 4)
    ) {
      this.resize(Math.floor(this.getCapacity() / 2))
    }
    const ret = this.data[this.front]
    this.front = (this.front + 1) % this.data.length
    return ret
  }

  resize (newCapacity) {
    const newData = new Array(newCapacity + 1)
    const size = this.tail > this.front
      ? this.tail - this.front
      : this.tail + this.data.length - this.front
    for (let i = 0; i < size; i ++) {
      newData[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = size
  }

  toString () {
    let ret = '[Queue]: [front '
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      ret += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) ret += ', '
    }
    ret += ` tail] => [front: ${this.front}] => [tail: ${this.tail}] => [capacity: ${this.getCapacity()}]`
    return ret
  }
}

module.exports = LoopQueen
