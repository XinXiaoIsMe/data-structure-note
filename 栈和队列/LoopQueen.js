class LoopQueue {
  constructor (capacity = 1) {
    this.data = new Array(capacity + 1)
    this.size = 0
    this.front = 0
    this.tail = 0
  }

  getCapacity () {
    return this.data.length - 1
  }

  isEmpty () {
    return this.front === this.tail
  }

  getFront () {
    if (this.isEmpty()) throw new RangeError('cannot get front element of empty queue.')
    return this.data[this.front % this.data.length]
  }

  enqueue (el) {
    if (this.size > 0 && this.front === (this.tail + 1) % this.data.length)
      this.resize(this.getCapacity() * 2)
    this.data[this.tail] = el
    this.tail = (this.tail + 1) % this.data.length
    this.size ++
  }

  dequeue () {
    if (this.isEmpty()) throw new RangeError('cannot dequeue element from an empty queue.')

    if (this.size > 0 && this.size === Math.floor(this.getCapacity() / 4))
      this.resize(Math.floor(this.getCapacity() / 2))
    const ret = this.data[this.front]
    this.front = (this.front + 1) % this.data.length
    this.size --
    return ret
  }

  resize (newCapacity) {
    const newData = new Array(newCapacity + 1)
    for (let i = 0; i < this.size; i ++) {
      newData[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  toString () {
    let ret = '[Queue]: [front: '
    for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
      ret += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) ret += ', '
    }
    ret += ' tail]'
    return ret
  }
}

module.exports = LoopQueue
