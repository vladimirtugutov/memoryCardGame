const section = document.querySelector('section');
const playesGuessesCount = document.querySelector('span');

let playerGuesses = 0;

playesGuessesCount.textContent = playerGuesses;

const getData = () => [
  { imgSrc: '/images/image01.jpeg', name: 'surok01' },
  { imgSrc: '/images/image02.jpeg', name: 'surok02' },
  { imgSrc: '/images/image03.jpeg', name: 'surok03' },
  { imgSrc: '/images/image04.jpeg', name: 'surok04' },
  { imgSrc: '/images/image05.jpeg', name: 'surok05' },
  { imgSrc: '/images/image06.jpeg', name: 'surok06' },
  { imgSrc: '/images/image07.jpeg', name: 'surok07' },
  { imgSrc: '/images/image00.jpeg', name: 'surok08' },
  { imgSrc: '/images/image01.jpeg', name: 'surok01' },
  { imgSrc: '/images/image02.jpeg', name: 'surok02' },
  { imgSrc: '/images/image03.jpeg', name: 'surok03' },
  { imgSrc: '/images/image04.jpeg', name: 'surok04' },
  { imgSrc: '/images/image05.jpeg', name: 'surok05' },
  { imgSrc: '/images/image06.jpeg', name: 'surok06' },
  { imgSrc: '/images/image07.jpeg', name: 'surok07' },
  { imgSrc: '/images/image00.jpeg', name: 'surok08' },
];

// const data = getData();

const randomize = () => {
  const cardData = getData();
  console.log(cardData);
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

randomize();

const cardGenerator = () => {
  const cardData = randomize();
  // console.log(cardData);
  cardData.forEach((item) => {
    // console.log(item);
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    face.src = item.imgSrc;
    card.setAttribute('name', item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkCards(e);
    });
  });
};

const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  // console.log(clickedCard);
  clickedCard.classList.add('flipped');
  const toggleCard = document.querySelectorAll('.toggleCard');
  const flippedCards = document.querySelectorAll('.flipped');

  if (flippedCards.length === 2) {
    playerGuesses += 1;
    playesGuessesCount.textContent = playerGuesses;
    if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
      console.log('match');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      });
    } else {
      console.log('wrong');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1000);
      });
      // playerGuesses += 1;
      // playesGuessesCount.textContent = playerGuesses;
      if (playerGuesses === 100) {
        restart('Try again!');
      }
    }
  }
  // see if we won the game
  if (toggleCard.length === 16) {
    setTimeout(() => {
      window.location.href = `/roundstats/${playerGuesses}`;
      // restart('You won!');
    }, 1000);
  }
};

const restart = (text) => {
  const cardData = randomize();
  const faces = document.querySelectorAll('.face');
  const cards = document.querySelectorAll('.card');
  section.style.pointerEvents = 'none';
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    // randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      faces[index].src = item.imgSrc;
      cards[index].setAttribute('name', item.name);
      section.style.pointerEvents = 'all';
    }, 1000);
  });
  playerGuesses = 0;
  playesGuessesCount.textContent = playerGuesses;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
