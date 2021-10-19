var promisse = Promisse.resolve(3)
var promisse2 = Promisse.resolve(4)
var promisse3 = Promisse.resolve(5)

Promise.race([promisse, promisse2, promisse3])
  .then(function )