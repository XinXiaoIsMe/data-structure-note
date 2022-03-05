// 使用动态数组实现堆

const DynamicArray = require('./DynamicArray')

class Heap {
  constructor () {
    this.data = new DynamicArray()
  }
}

module.exports = Heap
