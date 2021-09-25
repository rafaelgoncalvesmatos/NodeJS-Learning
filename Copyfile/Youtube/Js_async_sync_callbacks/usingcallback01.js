//callback > promise > async/await

const fs = require('fs')

console.log(1)

// Set function for callback request, this no stop were script
function callback(err, contents){
    console.log(err, String(contents))
}

fs.readFile('./init1.txt', callback)

console.log(2)

console.log(3)