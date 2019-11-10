const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    maximumResult: 5,
    maximumSentences: 10
  }

  content.searchTerm = askAndReturnSearchTerm()
  state.save(content)

  function askAndReturnSearchTerm() {
    return readline.question('Digite o termo da busca: ')
  }
}

module.exports = robot