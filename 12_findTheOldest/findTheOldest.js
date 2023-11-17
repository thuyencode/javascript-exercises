const getAge = function (birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear()
  }

  return deathYear - birthYear
}

const findTheOldest = function (
  people = [{ name: '', yearOfBirth: 0, yearOfDeath: 0 }]
) {
  return people.sort(
    (person1, person2) =>
      getAge(person2.yearOfBirth, person2.yearOfDeath) -
      getAge(person1.yearOfBirth, person1.yearOfDeath)
  )[0]
}

// Do not edit below this line
module.exports = findTheOldest
