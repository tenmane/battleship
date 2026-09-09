import { Ship } from "../control/ship.js";

describe("Ship Object", () => {
  let battleship = new Ship(4);
  describe("Get object properties", () => {
    test("Get the size of the ship", () => {
      expect(battleship.size).toBe(4);
    });
    test("Get the hit amount of the ship", () => {
      expect(battleship.hitAmount).toBe(0);
    });
    test("Check if the ship has sunk", () => {
      expect(battleship.sunk).toBe(false);
    });
  });
  describe("Sinking mechanism gets triggered", () => {
    test("Ship has not sunk", () => {
      expect(battleship.sunk).toBe(false);
    });

    test("Ship has sunk", () => {
      battleship.hit();
      battleship.hit();
      battleship.hit();
      battleship.hit();
      expect(battleship.sunk).toBe(true);
    });
  });
});
