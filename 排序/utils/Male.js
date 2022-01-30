class Male {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  compareTo (male) {
    return this.age - male.age
  }
}

module.exports = Male
