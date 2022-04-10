class MaxHeap {
  constructor() {
    this.data = []
  }

  isEmpty() {
    return this.data.length === 0
  }

  getSize() {
    return this.data.length
  }

  get(k) {
    if (this.isEmpty()) throw new Error('cannot find max value from an empty heap.')
    return this.data[k]
  }

  findMax() {
    return this.get(0)
  }

  add(value) {
    this.data[this.getSize()] = value
    this.#siftUp(this.getSize() - 1)
  }

  extractMax() {
    const max = this.findMax()
    this.#swap(this.data, 0, this.getSize() - 1)
    this.data.length -= 1
    this.#siftDown(0)
    return max
  }

  #siftUp(k) {
    while (k >= 1) {
      let parent = this.#parent(k)
      if (this.get(parent) < this.get(k)) this.#swap(this.data, parent, k)
      else break
      k = parent
    }
  }

  #siftDown(k) {
    const size = this.getSize()
    while (this.#leftChild(k) < size) {
      let j = this.#leftChild(k)
      if (j + 1 < size && this.get(j + 1) > this.get(j)) j = this.#rightChild(k)
      if (this.get(k) > this.get(j)) break
      this.#swap(this.data, k, j)
      k = j
    }
  }

  #parent(k) {
    if (k < 0) throw new Error('invalid index')
    if (k === 0) throw new Error('root node hasn\'t parent node')
    return (k - 1) >>> 1
  }

  #leftChild(k) {
    return (k + 1) * 2 - 1
  }

  #rightChild(k) {
    return (k + 1) * 2
  }

  #swap(data, i, j) {
    [data[i], data[j]] = [data[j], data[i]]
  }

  static isMaxHeap(heap) {
    const data = heap.data
    if (data.length <= 1) return true
    for (let i = data.length - 1; i > 0; i--) {
      const parent = (i - 1) >>> 1
      if (data[i] > data[parent]) return false
    }
    return true
  }
}

module.exports = MaxHeap