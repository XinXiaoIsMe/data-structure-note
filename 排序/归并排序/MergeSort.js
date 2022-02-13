class MergeSort {
  constructor () {
    throw new SyntaxError('cannot use new operator.')
  }

  static sort (list) {
    this._sort(list, 0, list.length - 1)
  }

  static _sort (list, l, r) {
    if (l >= r) return
    // const m = Math.floor((l + r) / 2) 推荐使用下面的方式计算m，防止数据超出JavaScript可表示的整数范围
    const m = l + Math.floor((r - l) / 2)
    this._sort(list, l, m)
    this._sort(list, m + 1, r)
    this._merge(list, l, m, r)
  }

  static _merge (list, l, m, r) {
    const cacheList = list.slice(l, r + 1)
    let k = l, i = l, j = m + 1
    for (; k <= r; k ++) {
      if (i > m) {
        list[k] = cacheList[j - l]
        j ++
      } else if (j > r) {
        list[k] = cacheList[i - l]
        i ++
      } else if (cacheList[i - l] <= cacheList[j - l]) {
        list[k] = cacheList[i - l]
        i ++
      } else {
        list[k] = cacheList[j - l]
        j ++
      }
    }
    // or
    // while (i <= m || j <= r) {
    //   if (i > m) {
    //     list[k++] = cacheList[j - l]
    //     j ++
    //   } else if (j > r) {
    //     list[k++] = cacheList[i - l]
    //     i ++
    //   } else if (cacheList[i - l] < cacheList[j - l]) {
    //     list[k++] = cacheList[i - l]
    //     i ++
    //   } else {
    //     list[k++] = cacheList[j - l]
    //     j ++
    //   }
    // }
  }
}

module.exports = MergeSort
