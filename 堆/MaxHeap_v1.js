// 使用动态数组实现最大堆
const DynamicArray = require('./practice/DynamicArray')

class MaxHeap {
  constructor (arg) {
    if (Array.isArray(arg)) {
      // 使用 heapify 的方法添加元素 时间复杂度为 O(n)
      this.data = new DynamicArray(arg)
      for (let i = Math.floor((this.data.getSize() - 1) / 2); i >= 0; i --) this.siftDown(i)
    } else {
      this.data = new DynamicArray(arg)
    }
  }

  getSize () {
    return this.data.getSize()
  }

  isEmpty () {
    return this.data.isEmpty()
  }

  parent (index) {
    if (index === 0) throw new RangeError('the root node hasn\'t parent node.')
    return Math.floor((index - 1) / 2)
  }

  leftChild (index) {
    return index * 2 + 1
  }

  rightChild (index) {
    return index * 2 + 2
  }

  add (e) {
    this.data.addLast(e)
    this.siftUp(this.getSize() - 1)
  }

  siftUp (k) {
    while (k > 0 && this.data.get(this.parent(k)) < this.data.get(k)) {
      const parent = this.parent(k)
      this.data.swap(k, parent)
      k = parent
    }
  }

  findMax () {
    if (this.getSize() === 0) throw new Error('cannot extract maximum value of heap from an empty heap.')
    return this.data.get(0)
  }

  extractMax () {
    const ret = this.findMax()
    this.data.swap(0, this.getSize() - 1)
    this.data.removeLast()
    this.siftDown(0)
    return ret
  }

  siftDown (k) {
    while (this.leftChild(k) < this.getSize()) {
      let j = this.leftChild(k)
      if (j + 1 < this.getSize() && this.data.get(j + 1) > this.data.get(j)) j = this.rightChild(k)
      if (this.data.get(k) > this.data.get(j)) break
      this.data.swap(k, j)
      k = j
    }
  }
}

module.exports = MaxHeap
