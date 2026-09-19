import { Player } from "../control/player.js";
import {
  freezeGrid,
  pauseGrid,
  renderBoard,
  resumeGrid,
  unfreezeGrid,
} from "./render.js";
import { renderHit } from "./render.js";

const firstGrid = document.querySelector(".first-grid");
const secondGrid = document.querySelector(".second-grid");
const log = document.querySelector(".battle-log");

const playerForm = document.querySelector(".player-form");
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const playerOne = new Player();
  const bot = new Player(true);

  playerOne.placeAllShipsRandomly();
  bot.placeAllShipsRandomly();
  renderBoard(playerOne.gameBoard, firstGrid, false);
  renderBoard(bot.gameBoard, secondGrid, true);
  freezeGrid(firstGrid);
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      let playerAttack = bot.gameBoard.receiveAttack([
        box.dataset.row,
        box.dataset.col,
      ]);
      renderHit(box.dataset.row, box.dataset.col, secondGrid, playerAttack);

      if (bot.gameBoard.allSunk()) {
        log.textContent = "You Won!";
        freezeGrid(firstGrid);
        freezeGrid(secondGrid);
        return;
      }
      if (playerAttack === "Successful Hit!") {
        return;
      }
      unfreezeGrid(firstGrid);
      pauseGrid(firstGrid);
      freezeGrid(secondGrid);
      log.textContent = "Enemy Turn";
      setTimeout(() => {
        let botAttack;
        do {
          let row = Math.floor(Math.random() * 10);
          let col = Math.floor(Math.random() * 10);
          botAttack = playerOne.gameBoard.receiveAttack([row, col]);
          renderHit(row, col, firstGrid, botAttack);

          if (playerOne.gameBoard.allSunk()) {
            log.textContent = "You Lost!";
            return;
          }
        } while (
          botAttack === "Duplicate Position!" ||
          botAttack === "Successful Hit!"
        );

        unfreezeGrid(secondGrid);
        resumeGrid(firstGrid);
        freezeGrid(firstGrid);
        log.textContent = "Your Turn";
      }, 500);
    });
  });
});
