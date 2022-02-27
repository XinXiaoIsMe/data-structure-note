// 先求出 list 中 >= tar 的最小值，再判断这个最小值是否等于 tar
module.exports = function (list, tar) {
  let l = 0
  let r = list.length
  while (l < r) {
    const m = l + ((r - l) >>> 1)
    if (list[m] < tar) l = m + 1
    else r = m
  }
  if (l < list.length && list[l] === tar) return l
  return -1
}
