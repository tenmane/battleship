import { Player } from "../control/player.js";
import { renderBoard } from "./render.js";
import { renderHit } from "./render.js";

const playerForm = document.querySelector(".player-form");
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const playerOne = new Player();
  const bot = new Player(true);
  const firstGrid = document.querySelector(".first-grid");
  const secondGrid = document.querySelector(".second-grid");

  playerOne.placeAllShipsRandomly();
  bot.placeAllShipsRandomly();
  renderBoard(playerOne.gameBoard, firstGrid, false);
  renderBoard(bot.gameBoard, secondGrid, true);

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      let playerAttack = bot.gameBoard.receiveAttack([
        box.dataset.row,
        box.dataset.col,
      ]);
      renderHit(box.dataset.row, box.dataset.col, secondGrid, playerAttack);
      if (bot.gameBoard.allSunk()) {
        console.log("You Won!");
      }
      
      let botAttack;
      do {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        botAttack = playerOne.gameBoard.receiveAttack([row, col]);
        renderHit(row, col, firstGrid, botAttack);
        if (playerOne.gameBoard.allSunk()) {
          console.log("You Lost!");
        }
      } while (botAttack === "Duplicate Position!");
    });
  });
});
