// 查找数组中等于 tar 的最大索引 或者 大于 tar 的最小索引，类似于 Math.ceil
// 如：[2, 3, 4, 5, 5, 6] tar = 5 则返回 4
// tar = 1 则返回 0

const Upper = require('./Upper_v2')

module.exports = function UpperCeil (list, tar) {
  const upper = Upper.search(list, tar)
  if (upper - 1 >= 0 && list[upper - 1] === tar) return upper - 1
  return upper
}
