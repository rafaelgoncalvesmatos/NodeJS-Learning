function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        success: true,
        bandName: band,
        msg: band + 'is the best rock band ever'
      });
    } else {
      reject({
        success: false, 
        msg: 'I not so sure!'
      });
    }
  });
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Bohemian Rhapsody' + response.bandName);
    } else {
      reject('Do you know Queen?');
    }
  });
}

/*
Utilizando Promise

bestRockBand('Queen')
  .then(response => {
    console.log('Checking the answer...');
    return bestRockSong(response)
  })
  .then(response => {
    console.log('Finding the best song');
    console.log(response);
  })
  .catch(err => {
    console.log(err.msg);
  })
*/

// Usando Async/Await
// Para trata o erro como no catch do Promise acima, no async precisamos declarar 

async function doTheJob() {
  try {
    const bestrockBandResponse = await bestRockBand('Queen');
    console.log(bestrockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestrockBandResponse);
    console.log(bestRockSongResponse);  
  } catch (err) {
    console.log(err.log);
  }
}

doTheJob();