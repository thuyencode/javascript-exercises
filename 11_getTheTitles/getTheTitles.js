const getTheTitles = function (books = [{ title: '', author: '' }]) {
  return books.map((book) => book.title)
}

// Do not edit below this line
module.exports = getTheTitles
