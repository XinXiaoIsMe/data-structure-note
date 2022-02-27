// 查找 list 中 <= tar 的最大元素的索引
// 如果list中存在等于tar的值，则返回等于tar的元素的最大索引
// 如果不存在，则返回小于tar的值中最大值的索引
// module.exports = function (list, tar) {
//   let l = -1
//   let r = list.length - 1
//   while (l < r) {
//     const m = l + ((r - l + 1) >>> 1)
//     if (list[m] <= tar) l = m
//     else r = m - 1
//   }
//   do {
//     l --
//   } while(list[l] === tar)
//   return l + 1
// }
module.exports = function (list, tar) {
  let l = -1
  let r = list.length - 1
  while (l < r) {
    const m = l + ((r - l + 1) >>> 1)
    if (list[m] < tar) l = m
    else r = m - 1
  }
  if (l + 1 < list.length && list[l + 1] === tar) return l + 1
  return l
}
