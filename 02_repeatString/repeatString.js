const repeatString = function (string, num) {
  if (typeof string !== 'string') return 'ERROR'
  if (typeof num !== 'number' || num < 0) return 'ERROR'

  if (string.length === 0) return ''
  if (num === 0) return ''

  return string.repeat(num)
}

// Do not edit below this line
module.exports = repeatString
