// 如果 list 中存在等于 tar 的值，则返回等于 tar 的元素中的最小索引
// 否则返回大于 tar 的最小索引
// const Upper = require('./Upper_v2')

// module.exports = function (list, tar) {
//   const upper = Upper.search(list, tar)
//   if (upper - 1 >= 0 && list[upper - 1] !== tar) return upper
//   let p = upper - 1
//   while (list[p] === tar) p --
//   return p + 1
// }

// class Lower {
//   constructor () {}

//   static search (list, tar) {
//     return this._search(list, tar, 0, list.length)
//   }

//   static _search (list, tar, l, r) {
//     if (l === r) return l

//     const m = l + ((r - l) >>> 1)
//     if (list[m] < tar) return this._search(list, tar, m + 1, r)
//     return this._search(list, tar, l, m)
//   }
// }

// module.exports = Lower

module.exports = function (list, tar) {
  let l = 0
  let r = list.length

  while (l !== r) {
    const m = l + ((r - l) >>> 1)
    if (list[m] < tar) l = m + 1
    else r = m
  }

  return l
}
