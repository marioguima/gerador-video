const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const state = require('./state.js')

const googleSearchCredentials = require('../credentials/google-search.json')

async function robot() {
	const content = state.load()
	
	content.sites = await resultadosBuscaGoogle(content)

	state.save(content)

	async function resultadosBuscaGoogle(content) {
		const response = await customSearch.cse.list({
			auth: googleSearchCredentials.apiKey,
			cx: googleSearchCredentials.searchEngineId,
			q: content.searchTerm,
			// searchType: 'image', //filtra para buscar apenas por imagens
			//imgSize: 'huge', //força o google trazer apenas imagens com alta resolução
			lr: "lang_pt",
			// cr: "countryBR",
			siteSearch: "play.google.com youtube.com ted.com globoesporte.globo.com g1.globo.com",
			siteSearchFilter: "e"
			// num: 1
		})
		
		const sites = response.data.items.map((item) => {
			return [{title: item.title,
				     link: item.link}]
		})
		
		// console.dir(sites, { depth: null })
		return sites
	}
}

module.exports = robot