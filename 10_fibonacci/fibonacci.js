const fibonacci = function (n) {
  if (n === 0) return a
  if (n < 0) return 'OOPS'

  let a = 0,
    b = 1,
    temp

  for (let i = 2; i <= n; i++) {
    temp = a
    a = b
    b = temp + b
  }
  return b
}

// Do not edit below this line
module.exports = fibonacci
