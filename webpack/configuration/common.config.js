module.exports = () => ({
	// entry: [
	// '@babel/polyfill',
	// './src/index.js'
	// ],
	// In case of multiple entry points
	entry: {
		'main': [
			'@babel/polyfill',
			'./src/index.js'
		],
		'second': './src/index-second.js'
	}
})
