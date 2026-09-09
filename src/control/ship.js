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
