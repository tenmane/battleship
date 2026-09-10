export class Gameboard {
  constructor() {
    this.board = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ];
    this.missed = new Set();
    this.landed = new Set();
  }

  placeShip(ship, position, direction) {
    let length = ship.size;
    let row = position[0];
    let column = position[1];

    if (direction === "column") {
      if (length + row > 7) {
        return "Out of bounds!";
      }
    } else {
      if (length + column > 7) {
        return "Out of bounds!";
      }
    }

    while (length !== 0) {
      this.board[row][column] = ship;
      if (direction === "column") {
        row++;
        length--;
      } else {
        column++;
        length--;
      }
    }
  }

  receiveAttack(position) {
    let ship = this.board[position[0]][position[1]];
    if (
      this.missed.has(`${position[0]}, ${position[1]}`) ||
      this.landed.has(`${position[0]}, ${position[1]}`)
    ) {
      return "Duplicate Position!";
    }
    if (ship) {
      ship.hit();
      this.landed.add(`${position[0]}, ${position[1]}`);
      this.board[position[0]][position[1]] = false;
    } else {
      this.missed.add(`${position[0]}, ${position[1]}`);
    }
  }

  allSunk() {
    let sunk = true;
    this.board.forEach((row) =>
      row.forEach((position) => {
        if (position) {
          sunk = false;
        }
      }),
    );
    return sunk;
  }
}
