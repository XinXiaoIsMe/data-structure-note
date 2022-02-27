class Upper {
  constructor () {}

  static search (list, tar) {
    let l = 0
    let r = list.length
    while (l < r) {
      const m = l + ((r - l) >>> 1)
      if (tar >= list[m]) l = m + 1
      else r = m
    }
    return l
  }
}

module.exports = Upper
