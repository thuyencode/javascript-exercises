const add = function (a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return undefined
  }

  return a + b
}

const subtract = function (a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return undefined
  }

  return a - b
}

const sum = function (arr = []) {
  if (!Array.isArray(arr)) {
    return undefined
  }

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

const multiply = function (arr = []) {
  if (!Array.isArray(arr)) {
    return undefined
  }

  let result = 1

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }

  return result
}

const power = function (a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return undefined
  }

  let result = 1

  for (let i = 0; i < b; i++) {
    result *= a
  }

  return result
}

const factorial = function (n) {
  if (typeof n !== 'number') {
    return undefined
  }

  let result = 1

  for (let i = n; i > 1; i--) {
    result *= i
  }

  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
