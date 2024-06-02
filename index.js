

function readDirectories(){
	let fs = require('fs')
	let files = fs.readdirSync("/photos")
	console.log(files)
}

readDirectories()