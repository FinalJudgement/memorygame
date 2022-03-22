// const cardsArray = [
//   { name: "fries", img: "/Assets/Images/fries.png" },
//   { name: "cheeseburger", img: "/Assets/Images/cheeseburger.png" },
//   { name: "hotdog", img: "/Assets/Images/hotdog.png" },
//   { name: "ice-cream", img: "/Assets/Images/ice-cream.png" },
//   { name: "milkshake", img: "/Assets/Images/milkshake.png" },
//   { name: "pizza", img: "/Assets/Images/pizza.png" },
//   { name: "fries", img: "/Assets/Images/fries.png" },
//   { name: "cheeseburger", img: "/Assets/Images/cheeseburger.png" },
//   { name: "hotdog", img: "/Assets/Images/hotdog.png" },
//   { name: "ice-cream", img: "/Assets/Images/ice-cream.png" },
//   { name: "milkshake", img: "/Assets/Images/milkshake.png" },
//   { name: "pizza", img: "/Assets/Images/pizza.png" },
// ];

// const gridDisplay = document.querySelector("#grid");
// let resultDisplay = document.querySelector("#result");
// let cardsChosen = [];
// let cardsWon = [];
// let resetButton = document.querySelector("button");

// function createBoard() {
//   cardsArray.sort(() => 0.5 - Math.random());
//   cardsArray.forEach((element, index) => {
//     const card = document.createElement("img");
//     card.setAttribute("src", "/Assets/Images/blank.png");
//     card.setAttribute("data-id", index);
//     card.addEventListener("click", flipCard);
//     gridDisplay.appendChild(card);
//   });
//   console.log(gridDisplay);
// }

// createBoard();

// function resetBoard() {
//   cardsArray.forEach((element, index) => {
//     gridDisplay.removeChild(gridDisplay.firstChild);
//   });
//   resultDisplay.textContent = 0;
//   cardsChosen = [];
//   cardsWon = [];
//   createBoard();
// }

// resetButton.addEventListener("click", resetBoard);

// function checkMatch() {
//   const cards = document.querySelectorAll("img");
//   if (cardsChosen[0].id === cardsChosen[1].id) {
//     document.getElementById("match").textContent = "Must Pick Different cards";
//     cards[cardsChosen[0].id].setAttribute("src", "/Assets/Images/blank.png");
//     cards[cardsChosen[1].id].setAttribute("src", "/Assets/Images/blank.png");
//   } else if (cardsChosen[0].name === cardsChosen[1].name) {
//     document.getElementById("match").textContent = "Match Found!";
//     cards[cardsChosen[0].id].setAttribute("src", "/Assets/Images/white.png");
//     cards[cardsChosen[1].id].setAttribute("src", "/Assets/Images/white.png");

//     cardsWon.push(cardsChosen);
//     resultDisplay.textContent = cardsWon.length;
//     cards[cardsChosen[0].id].removeEventListener("click", flipCard);
//     cards[cardsChosen[1].id].removeEventListener("click", flipCard);
//   } else {
//     document.getElementById("match").textContent = "No Match Found";
//     cards[cardsChosen[0].id].setAttribute("src", "/Assets/Images/blank.png");
//     cards[cardsChosen[1].id].setAttribute("src", "/Assets/Images/blank.png");
//   }

//   cardsChosen = [];
//   if (cardsArray.length / 2 === cardsWon.length) {
//     document.getElementById("match").textContent =
//       "Congratulations, You've won the match!!!";
//     cardsWon = [];
//   }
// }

// function flipCard() {
//   if (cardsChosen.length !== 2) {
//     let cardId = this.getAttribute("data-id");
//     cardsChosen.push(cardsArray[cardId]);
//     this.setAttribute("src", cardsArray[cardId].img);
//     cardsArray[cardId].id = cardId;
//   }

//   if (cardsChosen.length === 2) {
//     setTimeout(checkMatch, 1000);
//   }
// }
