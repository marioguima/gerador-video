const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    useFecthContentFromWikipediaAlgorithmia: true,
    maximumSentences: 7
  }

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.lang = askAndReturnLanguage()
  state.save(content)

  function askAndReturnSearchTerm() {
    //return readline.question('Type a Wikipedia search term: ')
    return readline.question('Digite o termo da busca para Wikipedia: ')    
  }

  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    //const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  function askAndReturnLanguage() {
	  const language = ['pt','en', 'es', 'fr']
    //const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
    const selectedLangIndex = readline.keyInSelect(language,'Escolha um idioma: ')
	  const selectedLangText = language[selectedLangIndex]
	  return selectedLangText
  }
}

module.exports = robot