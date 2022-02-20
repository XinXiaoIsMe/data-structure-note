// const InsertionSort = require("../插入排序/InsertionSort")

// 自底向上的方式排序
class MergeSort {
  constructor () {
    throw new SyntaxError('this is a static class and cannot be called with new operator.')
  }

  static sort (list) {
    this.cacheList = list.slice(0)
    this._sort(list, 0, list.length - 1)
  }

  static _sort (list, l, r) {
    // 自底向上的排序也可以使用插入排序进行优化
    // for (let i = 0; i <= r; i += 16) {
    //   InsertionSort.sort(list, i, i + 16)
    // }
    // 使用上面的优化则 sz 从 16 开始
    // sz 表示每个区间的长度 从 1 开始递增，每次排序区间里面元素，依次扩大区间
    for (let sz = 16; sz <= r; sz += sz) {
      // [i, i + sz - 1] 到 [i + sz, i + sz + sz - 1]
      for (let i = l; i + sz <= r; i += (sz * 2)) {
        this.merge(list, i, i + sz - 1, Math.min(list.length - 1, i + sz + sz - 1))
      }
    }
  }

  static merge (list, l, m, r) {
    let i = l, j = m + 1, k = l
    for (; i <= r; i ++) this.cacheList[i] = list[i]
    i = l
    for (; k <= r; k ++) {
      if (i > m) {
        list[k] = this.cacheList[j]
        j ++
      } else if (j > r) {
        list[k] = this.cacheList[i]
        i ++
      } else if (this.cacheList[i] <= this.cacheList[j]) {
        list[k] = this.cacheList[i]
        i ++
      } else {
        list[k] = this.cacheList[j]
        j ++
      }
    }
  }
}

module.exports = MergeSort
