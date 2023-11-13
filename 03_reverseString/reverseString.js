const reverseString = function (string) {
  if (typeof string !== 'string') return undefined

  let reversedString = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i)
  }

  return reversedString
}

// Do not edit below this line
module.exports = reverseString
