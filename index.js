const robots = {
	// input: require('./robots/input.js'),
	// text: require('./robots/text.js'),
	// image: require('./robots/image.js'),
	// video: require('./robots/video.js'),
	input: require('./robots/input.js'),
	state: require('./robots/state.js'),
	googleSearch: require('./robots/google.js')
}

async function start() {
	robots.input()
	await robots.googleSearch()
	// await robots.text()
	// await robots.image()
	// await robots.video()
	
	const content = robots.state.load()
	console.dir(content, { depth: null })
}

start()
