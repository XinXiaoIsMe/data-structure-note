const readFile = require('./readFile')
const Set = require('./Set_v1')
// const Set = require('./Set_v2')

readFile('./book.txt')
  .then(data => {
    const words = data.toString().split(/\s|\d|[,;'"?:!.]/).filter(word => word)
    const set = new Set()
    words.forEach(word => set.add(word))
    console.log(set.getSize())
  })
  .catch(err => console.log(err))
