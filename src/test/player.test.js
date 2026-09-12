import { Player } from "../control/player";

describe("Player Object", () => {
  let playerOne;
  beforeEach(() => {
    playerOne = new Player();
  });
  test("Player has all ships", () => {
    expect(playerOne.ships.length).toEqual(5);
  });
});
