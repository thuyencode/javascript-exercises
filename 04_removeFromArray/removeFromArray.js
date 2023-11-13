const removeFromArray = function (arr = [], ...targets) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let canBeAdded = true

    for (let j = 0; j < targets.length; j++) {
      if (arr[i] === targets[j]) {
        canBeAdded = false
        break
      }
    }

    if (canBeAdded) newArr.push(arr[i])
  }

  return newArr
}

// Do not edit below this line
module.exports = removeFromArray
