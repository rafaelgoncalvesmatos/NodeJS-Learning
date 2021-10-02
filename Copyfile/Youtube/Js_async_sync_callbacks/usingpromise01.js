//callback > promise > async/await

// Declaration depends
const fs = require('fs')

console.log(1)

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

readFile('./init1.txt')
    .then( contents => {
        console.log(String(contents))
        return readFile('./init2.txt')
    })
    .then( contents => {
        console.log(String(contents))
    })


console.log(2)