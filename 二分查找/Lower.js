// 寻找 list 中 小于 tar 的最大值
module.exports = function (list, tar) {
  let l = -1
  let r = list.length - 1
  while (l < r) {
    const m = l + ((r - l + 1) >>> 1)
    if (list[m] >= tar) r = m - 1
    else l = m
  }
  return l
}
