class QuickSort {
  constructor () {
    throw new SyntaxError('this is a static class and cannot be called with new operator.')
  }

  static sort (arr) {
    this._sort(arr, 0, arr.length - 1)
  }

  static _sort (arr, l, r) {
    if (l >= r) return
    const p = this._partition(arr, l, r)
    this._sort(arr, l, p - 1)
    this._sort(arr, p + 1, r)
  }

  static _partition (arr, l, r) {
    let j = l // 此处存在一个问题，由于每次都是从数组的第一个元素开始计算其最终位置，导致在数组本身有序的情况下快速排序的时间复杂度变成了O(n*2)
    for (let i = l + 1; i <= r; i ++) {
      if (arr[i] < arr[l]) {
        j ++
        this._swap(arr, i, j)
      }
    }
    this._swap(arr, j, l)
    return j
  }

  static _swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

module.exports = QuickSort
