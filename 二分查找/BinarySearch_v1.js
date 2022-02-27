class BinarySearch {
  constructor () {

  }

  static search (list, tar) {
    debugger
    return this._search(list, tar, 0, list.length - 1)
  }

  static _search (list, tar, l, r) {
    if (l > r) return -1

    const m = l + ((r - l) >>> 1)
    if (list[m] > tar) return this._search(list, tar, l, m - 1)
    else if (list[m] < tar) return this._search(list, tar, m + 1, r)
    else return m
  }
}

module.exports = BinarySearch
