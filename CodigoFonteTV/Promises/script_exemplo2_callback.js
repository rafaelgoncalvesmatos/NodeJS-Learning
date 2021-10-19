const betterDeveloper = 'Vanessa'

function whoIsBetterCallback(callback, erroCallback) {
  if (betterDeveloper != 'Vanessa' && betterDeveloper != 'Gabriel ') {
    erroCallback({
      name: 'This is wrong, try again',
      message: betterDeveloper + '? really'
    })
  } else {
    callback({
      name: betterDeveloper,
      message: 'CDFs are the best!'
    })
  }
}

whoIsBetterCallback((result) => {
  console.log(result.name + '? Yeah! ' + result.message)
}, (error) => {
  console.log(error.name + ' ' + error.message)
})
