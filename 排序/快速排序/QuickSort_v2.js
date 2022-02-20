class QuickSort {
  constructor () {
    throw new SyntaxError()
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
    // 生成一个范围是[l, r]的随机整数 防止每次都从数组的第一个元素开始
    const random = Math.floor(Math.random() * (r - l + 1)) + l
    this._swap(list, l, random)
    let j = l, cur = l + 1
    for (; cur <= r; cur ++) {
      if (list[cur] < list[l]) {
        j ++
        this._swap(list, j, cur)
      }
    }
    this._swap(list, l, j)
    return j
  }

  static _swap (list, i, j) {
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
}

module.exports = QuickSort
