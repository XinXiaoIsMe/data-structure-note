/**
 * 查找大于 tar 的最小值的索引
 */
class Upper {
  constructor () {}

  static search (list, tar) {
    return this._search(list, tar, 0, list.length)
  }

  static _search (list, tar, l, r) {
    if (l === r) return l
    const m = l + ((r - l) >>> 1)
    if (tar >= list[m]) return this._search(list, tar, m + 1, r)
    else return this._search(list, tar, l, m)
  }
}

module.exports = Upper
