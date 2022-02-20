/**
 * 三路快速排序
 */
class QuickSort {
  constructor () {
    throw new SyntaxError()
  }

  static sort (list) {
    this._sort(list, 0, list.length - 1)
  }

  static _sort (list, l, r) {
    if (l >= r) return
    const [lt, gt] = this._partition(list, l, r)
    this._sort(list, l, lt - 1)
    this._sort(list, gt, r)
  }

  static _partition (list, l, r) {
    let lt = l,
        gt = r + 1,
        cur = l + 1
    const random = l + Math.floor(Math.random() * (r - l + 1))
    this._swap(list, l, random)
    // [l + 1, ... , lt] [gt, ... , r] [lt + 1, gt - 1]
    while (cur < gt) {
      if (list[cur] < list[l]) {
        lt ++
        this._swap(list, lt, cur)
      } else if (list[cur] > list[l]) {
        gt --
        this._swap(list, gt, cur)
        cur --
      }
      cur ++
    }
    this._swap(list, l, lt)
    return [lt, gt]
  }

  static _swap (list, i, j) {
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
}

module.exports = QuickSort
