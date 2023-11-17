const palindromes = function (originalStr) {
  if (typeof originalStr !== 'string') return undefined

  const str1 = originalStr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const str2 = str1.split('').reverse().join('')

  return str1 === str2
}

// Do not edit below this line
module.exports = palindromes
