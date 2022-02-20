/**
 * 双路快速排序法
 */
class QuickSort {
  constructor () {
    throw new SyntaxError('this is a static class and cannot be called with new operator.')
  }

  static sort (list) {
    this._sort(list, 0, list.length - 1)
  }

  static _sort (list, l, r) {
    if (l >= r) return
    const p = this._partition(list, l, r)
    this._sort(list, l, p - 1)
    this._sort(list, p + 1, r)
  }

  static _partition (list, l, r) {
    const random = l + Math.floor(Math.random() * (r - l + 1))
    this._swap(list, l, random)
    let i = l + 1, j = r
    while (true) {
      while (i <= j && list[i] < list[l]) i ++
      while (j >= i && list[j] > list[l]) j --
      if (i >= j) break
      this._swap(list, i, j)
      i ++
      j --
    }
    this._swap(list, l, j)
    return j
  }

  static _swap (list, l, r) {
    const temp = list[l]
    list[l] = list[r]
    list[r] = temp
  }
}

module.exports = QuickSort
