function sumNumbers() {
  let result = 1 + 1;
  if (result == 2) {
    sucessCallback()
  }else {
    errorCallback()
  }
}

function sucessCallback() {
  console.log("Yeah! Number 2!")
}

function errorCallback() {
  console.log("Ops! something wrong.")
}

sumNumbers();