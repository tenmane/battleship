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
      let placedShip;
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      let position =
        Math.floor(Math.random() * 2) === 1 ? "vertical" : "column";
      placedShip = this.gameBoard.placeShip(ship, [row, col], position);
      while (
        placedShip === "Out of bounds!" ||
        placedShip === "Overlapping positions!"
      ) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        placedShip = this.gameBoard.placeShip(ship, [row, col], position);
      }
    });
  }
}
