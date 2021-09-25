//callback > promise > async/await

const fs = require('fs')

console.log(1)

// Set a arrow function on js

fs.readFile('./init1.txt', (err, contents) => {
    console.log(err, String(contents))
})

console.log(2)

console.log(3)

