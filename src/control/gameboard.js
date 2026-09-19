export class Gameboard {
  constructor() {
    this.board = [
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false],
    ];
    this.missed = new Set();
    this.landed = new Set();
  }

  placeShip(ship, position, direction) {
    let length = ship.size;
    let row = position[0];
    let column = position[1];
    if (direction === "column") {
      if (length + column > 10) {
        return "Out of bounds!";
      }
    } else {
      if (length + row > 10) {
        return "Out of bounds!";
      }
    }
    if (direction === "column") {
      let temp = column;
      for (let i = 0; i < length; i++) {
        if (!(this.board[row][temp] === false)) {
          return "Overlapping positions!";
        }
        temp++;
      }
    } else {
      let temp = row;
      for (let i = 0; i < length; i++) {
        if (!(this.board[temp][column] === false)) {
          return "Overlapping positions!";
        }
        temp++;
      }
    }

    while (length !== 0) {
      this.board[row][column] = ship;
      if (direction === "column") {
        column++;
      } else {
        row++;
      }
      length--;
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
      return "Successful Hit!";
    } else {
      this.missed.add(`${position[0]}, ${position[1]}`);
      return "Missed!";
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
