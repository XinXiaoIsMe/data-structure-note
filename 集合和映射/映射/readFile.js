const fs = require('fs')

module.exports = function (path) {
  let onResolve
  let onReject
  fs.readFile(path, function (err, data) {
    if (err) onReject(err)
    else onResolve(data)
  })
  return new Promise((resolve, reject) => {
    onResolve = resolve
    onReject = reject
  })
}
