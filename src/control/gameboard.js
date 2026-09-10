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
    this.missed = [];
    this.landed = [];
  }

  placeShip(ship, position, direction) {
    let length = ship.size;
    let row = position[0];
    let column = position[1];
    while (length !== 0) {
      this.board[row][column] = ship;
      if (direction === "vertical") {
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
    if (ship) {
      ship.hit();
      this.landed.push(position);
      this.board[position[0]][position[1]] = false;
    } else {
      this.missed.push(position);
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
