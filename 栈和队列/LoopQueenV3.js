/**
 * 不浪费一个空间
 */
class LoopQueen {
  constructor (capacity = 1) {
    this.data = new Array(capacity)
    this.size = 0
    this.front = 0
    this.tail = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getCapacity () {
    return this.data.length
  }

  getFront () {
    if (this.isEmpty()) throw new RangeError('cannot get the front element of empty queue.')
    return this.data[this.front]
  }

  enqueue (el) {
    if (this.getCapacity() > 0 && this.size === this.getCapacity()) this.resize(this.getCapacity() * 2)
    this.data[this.tail] = el
    this.tail = (this.tail + 1) % this.data.length
    this.size ++
  }

  dequeue () {
    if (this.isEmpty()) throw new RangeError('cannot dequeue element from an empty queue.')

    if (this.getCapacity() > 0 && this.size <= Math.floor(this.getCapacity() / 4)) this.resize(Math.floor(this.getCapacity() / 2))
    const ret = this.data[this.front]
    this.front = (this.front + 1) % this.getCapacity()
    this.size --
    return ret
  }

  resize (newCapacity) {
    const newData = new Array(newCapacity)
    for (let i = 0; i < this.size; i ++) {
      newData[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  toString () {
    let ret = '[Queue]: [front '
    for (let i = 0; i < this.size; i ++) {
      ret += this.data[(i + this.front) % this.data.length]
      if (i + 1 !== this.size) ret += ', '
    }
    ret += ` tail] => [front: ${this.front}] => [tail: ${this.tail}] => [capacity: ${this.getCapacity()}]`
    return ret
  }
}

module.exports = LoopQueen
