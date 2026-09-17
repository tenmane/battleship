import { Gameboard } from "./gameboard.js";
import { Ship, shipSizes } from "./ship.js";

export class Player {
  constructor(isComputer = false) {
    this.gameBoard = new Gameboard();
    this.ships = shipSizes.map((size) => {
      return new Ship(size);
    });
    this.isComputer = isComputer;
  }
  placeAllShipsRandomly() {
    this.ships.forEach((ship) => {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      this.gameBoard.placeShip(ship, [row, col], "vertical");
    });
  }
}
