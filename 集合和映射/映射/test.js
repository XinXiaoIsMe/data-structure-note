const readFile = require('./readFile')
// const Map = require('./Map_v1')
const Map = require('./Map_v2')

const map = new Map()
map.add('name', 'Mike')
map.add('age', 18)
console.log(map)
map.remove('age')
console.log(map)
map.add('name', 'Jerry')
console.log(map)
console.log(map.get('name'))
map.set('name', 'Tom')
console.log(map)
console.log(map.contains('name'))

// readFile('./book.txt')
//   .then(data => {
//     const words = data.toString().split(/\s|\d|[,;'"?:!.]/).filter(word => word)
//     const map = new Map()
//     words.forEach(word => {
//       word = word.toLowerCase()
//       if (map.contains(word)) {
//         map.set(word, map.get(word) + 1)
//       } else {
//         map.add(word, 1)
//       }
//     })
//     console.log(`Total words: ${words.length}`)
//     console.log(`Total different words: ${map.getSize()}`)
//     console.log(`Frequency of PRIDE: ${map.get('pride')}`)
//     console.log(`Frequency of PREJUDICE: ${map.get('prejudice')}`)
//   })
//   .catch(err => console.log(err))
