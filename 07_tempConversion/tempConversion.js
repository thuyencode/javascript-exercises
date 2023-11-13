const convertToCelsius = function (fahrenheit = 32) {
  if (typeof fahrenheit !== 'number') return undefined

  return parseFloat(((fahrenheit - 32) * (5 / 9)).toFixed(1))
}

const convertToFahrenheit = function (celsius = 0) {
  if (typeof celsius !== 'number') return undefined

  return parseFloat((celsius * (9 / 5) + 32).toFixed(1))
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
