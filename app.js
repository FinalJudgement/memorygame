const cardsArray = [
  {
    name: "cheeseburger",
    img: "/assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "/assets/images/fries.png",
  },
  {
    name: "hotdog",
    img: "/assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/assets/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "/assets/images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "/assets/images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "/assets/images/fries.png",
  },
  {
    name: "hotdog",
    img: "/assets/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/assets/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/assets/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "/assets/images/pizza.png",
  },
];

cardsArray.sort(() => 0.5 - Math.random());

const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const gridDisplay = document.getElementById("grid");
const resetButton = document.getElementById("reset-button");
let cardsChosen = [];
let cardsWon = [];

function createBoard() {
  resetButton.textContent = "Reset";
  resultDisplay.textContent = "Pick Your Cards!";
  scoreDisplay.textContent = 0;
  resetButton.style.transform =
    "scaleX(1) scaleY(1) translateX(0%) translateY(0%)";
  cardsArray.forEach((e, i) => {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  });
}

resetButton.addEventListener("click", resetBoard);

function resetBoard() {
  cardsChosen = [];
  cardsWon = [];
  cardsArray.forEach((e) => {
    gridDisplay.removeChild(gridDisplay.firstChild);
  });
  cardsArray.sort(() => 0.5 - Math.random());
  createBoard();
}

createBoard();

function checkMatch() {
  const images = document.querySelectorAll("img");
  if (cardsChosen[0].id === cardsChosen[1].id) {
    resultDisplay.textContent = "You Must Choose A Different Card";
    scoreDisplay.textContent = cardsWon.length;
    images[cardsChosen[0].id].setAttribute("src", "assets/images/blank.png");
    images[cardsChosen[1].id].setAttribute("src", "assets/images/blank.png");
  } else if (cardsChosen[0].name === cardsChosen[1].name) {
    cardsWon.push(cardsChosen);
    resultDisplay.textContent = "You've Got A Match!!!";
    scoreDisplay.textContent = cardsWon.length;
    images[cardsChosen[0].id].setAttribute("src", "assets/images/white.png");
    images[cardsChosen[1].id].setAttribute("src", "assets/images/white.png");
    images[cardsChosen[0].id].removeEventListener("click", flipCard);
    images[cardsChosen[1].id].removeEventListener("click", flipCard);
  } else {
    resultDisplay.textContent = "No Match Found";
    images[cardsChosen[0].id].setAttribute("src", "assets/images/blank.png");
    images[cardsChosen[1].id].setAttribute("src", "assets/images/blank.png");
  }
  cardsChosen = [];

  if (cardsArray.length / 2 === cardsWon.length) {
    resultDisplay.textContent = "You've Won!";
    resetButton.textContent = "Play Again?";
    resetButton.style.transform =
      "scaleX(6) scaleY(6) translateX(-82.4%) translateY(82.8%)";
  }
}

function flipCard() {
  if (cardsChosen.length !== 2) {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardsArray[cardId]);
    this.setAttribute("src", cardsArray[cardId].img);
    cardsArray[cardId].id = cardId;
  }
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
