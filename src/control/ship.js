export class Ship {
  constructor(size) {
    this.size = size;
    this.hitAmount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitAmount++;
    this.sunk = this.isSunk();
  }

  isSunk() {
    return this.hitAmount >= this.size;
  }
}

export const shipSizes = [5, 4, 3, 3, 2];
