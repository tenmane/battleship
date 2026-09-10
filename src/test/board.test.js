import { Gameboard } from "../control/gameboard.js";
import { Ship } from "../control/ship.js";
describe("Gameboard Object", () => {
  let gameBoard;
  let ship;

  beforeEach(() => {
    ship = new Ship(4);
    gameBoard = new Gameboard();
    gameBoard.placeShip(ship, [1, 2], "horizontal");
  });

  test("Place ship on board", () => {
    expect(
      gameBoard.board[1][2] &&
        gameBoard.board[1][3] &&
        gameBoard.board[1][4] &&
        gameBoard.board[1][5],
    ).toBeTruthy();
  });

  test("Ship receives attacks", () => {
    gameBoard.receiveAttack([1, 2]);
    expect(ship.hitAmount).toEqual(1);
  });

  test("Ship sunk", () => {
    gameBoard.receiveAttack([1, 2]);
    gameBoard.receiveAttack([1, 3]);
    gameBoard.receiveAttack([1, 4]);
    gameBoard.receiveAttack([1, 5]);
    expect(ship.sunk).toBe(true);
  });

  test("Ship hasn't sunk", () => {
    gameBoard.receiveAttack([1, 2]);
    gameBoard.receiveAttack([1, 3]);
    gameBoard.receiveAttack([1, 4]);
    expect(ship.sunk).toBe(false);
    expect(gameBoard.allSunk()).toBe(false);
  });

  test("All ships have sunk", () => {
    gameBoard.receiveAttack([1, 2]);
    gameBoard.receiveAttack([1, 3]);
    gameBoard.receiveAttack([1, 4]);
    gameBoard.receiveAttack([1, 5]);
    expect(gameBoard.allSunk()).toBe(true);
  });

  test("All ships haven't sunk", () => {
    gameBoard.receiveAttack([1, 2]);
    gameBoard.receiveAttack([1, 3]);
    gameBoard.receiveAttack([1, 4]);
    expect(gameBoard.allSunk()).toBe(false);
  });
});
