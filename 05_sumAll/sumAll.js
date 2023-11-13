const sumAll = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR'
  }

  if (num1 < 0 || num2 < 0) {
    return 'ERROR'
  }

  let result = num1 > num2 ? num2 : num1
  const n = num1 > num2 ? num1 : num2

  for (let i = 2; i <= n; i++) {
    result += i
  }

  return result
}

// Do not edit below this line
module.exports = sumAll
