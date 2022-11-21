/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let topIcon = document.querySelector(".top-icon");
let botIcon = document.querySelector(".bot-icon");
let number = document.querySelector(".number");
let button = document.querySelector(".btn");
let input = document.querySelector(".input");
let container = document.querySelector(".my-card");

let cardNumberArr = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let cardKindArr = ["spades", "diamonds", "clovers", "hearts"];

let kindIcons = {
  spades: "♠",
  diamonds: "♦",
  clovers: "♣",
  hearts: "♥"
};

const randomElement = arr => {
  let num = Math.round(Math.random() * (arr.length - 1));
  return arr[num];
};

const generateCard = () => {
  let cardNumber = randomElement(cardNumberArr);
  let cardKind = randomElement(cardKindArr);

  topIcon.innerHTML = kindIcons[cardKind];
  botIcon.innerHTML = kindIcons[cardKind];
  topIcon.classList = `top-icon ${cardKind}`;
  botIcon.classList = `bot-icon ${cardKind}`;
  number.innerHTML = cardNumber;
};

window.onload = generateCard;
button.addEventListener("click", generateCard);
setInterval(generateCard, 10000);
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    container.style.width = `${input.value}px`;
  }
});
