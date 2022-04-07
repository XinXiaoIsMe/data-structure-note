// 实现最小堆

class MinHeap {
  constructor() {
    this.data = []
  }

  parent(k) {
    if (k === 0) throw new Error('cannot get root node\'s parent node.')
    return (k - 1) >>> 1
  }

  leftChild(k) {
    return (k + 1) * 2 - 1
  }

  rightChild(k) {
    return (k + 1) * 2
  }

  size() {
    return this.data.length
  }

  isEmpty() {
    return this.size() === 0
  }

  getMax() {
    if (this.data.length === 0) throw new Error('The heap is empty.')
    return this.data[0]
  }

  get(k) {
    if (k < 0 || k >= this.size()) throw new RangeError('Index must >= 0 and < the size of heap.')
    return this.data[k]
  }

  add(value) {
    this.data.push(value)
    this.#siftUp(this.size() - 1)
  }

  extractMin() {
    if (this.size() === 0) throw new Error('The heap is empty.')
    const ret = this.get(0)
    this.#swap(0, this.size() - 1)
    this.data.pop()
    this.#siftDown(0)
    return ret
  }

  #siftUp(k) {
    while (k > 0 && this.get(this.parent(k)) > this.get(k)) {
      this.#swap(k, this.parent(k))
      k = this.parent(k)
    }
  }

  #siftDown(k) {
    while (this.leftChild(k) < this.size()) {
      let j = this.leftChild(k)
      if (j + 1 < this.size() && this.get(j + 1) < this.get(j)) j = this.rightChild(k)
      if (this.get(k) < this.get(j)) break
      this.#swap(k, j)
      k = j
    }
  }

  #swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

module.exports = MinHeap
