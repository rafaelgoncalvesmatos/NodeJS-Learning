const betterDeveloper = 'Ze'

function whoIsBetterCallback(callback, erroCallback) {

  return new Promise((resolve, reject) => {
    
    if (betterDeveloper != 'Vanessa' && betterDeveloper != 'Gabriel ') {
      reject({
        name: 'This is wrong, try again',
        message: betterDeveloper + '? really'
      })
    } else {
      resolve({
        name: betterDeveloper,
        message: 'CDFs are the best!'
      })
    
    }
  })
}

whoIsBetterCallback().then((result) => {
  console.log(result.name + '? Yeah! ' + result.message)
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
})
