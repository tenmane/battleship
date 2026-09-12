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
}
