export function renderBoard(gameboard, container, hideShips) {
  container.innerHTML = "";
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      const box = document.createElement("button");
      const boxSize = 100 / 10;
      box.style.height = `${boxSize}%`;
      box.style.width = `${boxSize}%`;
      box.classList.add("box");
      box.dataset.row = i;
      box.dataset.col = j;
      if (gameboard.board[i][j]) {
        renderShip(box, hideShips);
      }
      container.appendChild(box);
    }
  }
}

export function renderShip(box, hideShips) {
  if (!hideShips) {
    box.classList.add("has-ship");
  } else {
    box.classList.add("enemy-ship-testing");
  }
}

export function renderHit(row, col, targetGrid, attackStatus) {
  let box = targetGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  if (attackStatus === "Successful Hit!") {
    box.classList.add("successful-hit");
    box.textContent = "X";
    box.disabled = true;
  } else if (attackStatus === "Missed!") {
    box.classList.add("missed");
    box.textContent = "X";
    box.disabled = true;
  }
}
