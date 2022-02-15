const InsertionSort = require('../插入排序/InsertionSort')

class MergeSort {
  constructor () {
    throw new SyntaxError('cannot use new operator.')
  }

  static sort (list) {
    // 优化3：由于归并排序的merge操作频繁生成新的数组，开辟内存花费的时间可以通过cacheList避免
    this.cacheList = list.slice(0)
    this._sort(list, 0, list.length - 1)
  }

  static _sort (list, l, r) {
    // 优化1：由于归并排序的时间复杂度的常数级在数据量较小的时候可能比数据长度还大，因此此处可以利用插入排序优化
    // 需要注意的是，此优化并不稳定，因此并不关键
    // if (r - l <= 15) {
    //   InsertionSort.betterSort(list, l, r + 1)
    //   return
    // }
    if (l >= r) return
    // const m = Math.floor((l + r) / 2) 推荐使用下面的方式计算m，防止数据超出JavaScript可表示的整数范围
    const m = l + Math.floor((r - l) / 2)
    this._sort(list, l, m)
    this._sort(list, m + 1, r)
    // 优化2：由于合并的时候两个数组已经有序，则如果 list[m] < list[m + 1]说明整个数组已经有序了，不需再比较合并
    if (list[m] >= list[m + 1]) this._merge(list, l, m, r)
  }

  static _merge (list, l, m, r) {
    // const cacheList = list.slice(l, r + 1)
    for (let i = l; i < r; i ++) {
      this.cacheList[i] = list[i] // 通过给cacheList赋值而不是重新开辟数组
    }
    let k = l, i = l, j = m + 1
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
