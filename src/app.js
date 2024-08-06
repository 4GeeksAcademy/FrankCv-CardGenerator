/* eslint-disable */
import "bootstrap";
import "./style.css";

let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let symbolSuit = ["♦", "♥", "♠", "♣"];

let generateSuitNumber = function(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  let found = array[randomNumber];
  return found;
};

window.onload = function() {
  createNewCard();
};

const newCardButton = document.getElementById(`addNewCard`);
const dimention = document.getElementById(`dimention`);
//const input = document.getElementById(`floatingInput`);
const widthCard = document.getElementById(`floatingInputWidth`);
const heightCard = document.getElementById(`floatingInputHeight`);
const card = document.getElementById(`card`);
const sizeButton = document.getElementById(`reSize`);

newCardButton.addEventListener("click", () => {
  createNewCard();
});
//Event to get input Time
const input = document.getElementById(`floatingInput`);
let time = null;
dimention.addEventListener("click", () => {
  console.log(time);
  time === null
    ? (time = setInterval(createNewCard, input.value * 1000))
    : clearInterval(time);

  console.log(1000 * input.value);
});

sizeButton.addEventListener("click", () => {
  //When click on button then get inputs value, but this should be different from zero
  card.style.width = `${widthCard.value}px`;
  card.style.height = `${heightCard.value}px`;
  console.log(
    `its width is: ${toString(widthCard.value)} its height is : ${toString(
      heightCard.value
    )}`
  );
});

function createNewCard() {
  //gets a random value of suit and Card's Number
  let randomSuit = generateSuitNumber(symbolSuit);
  let randomCardNumber = generateSuitNumber(cardNumber);
  //find element in html
  let suitTop = document.getElementById(`suitTop`);
  let number = document.getElementById(`number`);
  let suitBot = document.getElementById(`suitBot`);
  //setting text in html founded
  suitTop.innerText = `${randomSuit}`;
  number.innerText = `${randomCardNumber}`;
  suitBot.innerText = `${randomSuit}`;
  //Modifying styles by DOM
  let allSymbols = document.querySelectorAll(`div`);

  for (let i = 0; i < allSymbols.length; i++) {
    if (allSymbols[i].innerText === `♦` || allSymbols[i].innerText === `♥`) {
      allSymbols[i].style.color = `red`;
    } else {
      allSymbols[i].style.color = `black`;
    }
  }
}
