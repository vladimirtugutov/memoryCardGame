const fs = require('fs');
const fetch = require('node-fetch');

async function getCats() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full', {
    method: 'GET',
  });
  const result = await response.json();
  // console.log(result);
  // console.log(result[0].url);
  return result[0].url;
}

async function getDogs() {
  const response = await fetch('https://random.dog/woof.json', {
    method: 'GET',
  });
  const result = await response.json();
  // console.log(result.url);
  return result.url;
}

async function download(url, index) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`./public/images/image0${index}.jpeg`, buffer, () => console.log('finished downloading!', index));
}

exports.renderCatGame = async (req, res) => {
  const catURLs = [];
  while (catURLs.length < 8) {
    const catURL = await getCats();
    if (catURLs.length !== 0) {
      const dublicate = catURLs.find((item) => item === catURL); // if not found: dubl = undef
      console.log(dublicate);
      if (!dublicate) {
        catURLs.push(catURL);
      } else {
        console.log('Found dublicate: ', dublicate);
      }
    } else { catURLs.push(catURL); }
  }

  for (let i = 0; i <= 7; i += 1) {
    await download(catURLs[i], i);
  }
  res.render('game');
};

exports.renderDogGame = async (req, res) => {
  const dogURLs = [];
  while (dogURLs.length < 8) {
    const dogURL = await getDogs();
    if (dogURL.endsWith('.jpg') || dogURL.endsWith('.gif')) {
      if (dogURLs.length !== 0) {
        const dublicate = dogURLs.find((item) => item === dogURL); // if not found: dubl = undef
        if (!dublicate) {
          dogURLs.push(dogURL);
        } else {
          console.log('Found dublicate: ', dublicate);
        }
      } else { dogURLs.push(dogURL); }
      // dogURLs.push(dogURL);
      // console.log('~~~~~~~~~', dogURLs);
    }
    // if (dogURLs.length !== 0) {
    //   let dublicate = dogURLs.find(item => item === dogURL);
    // }
  }
  for (let i = 0; i <= 7; i += 1) {
    await download(dogURLs[i], i);
  }
  res.render('game');
};
