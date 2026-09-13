let firstGrid = document.querySelector(".first-grid");
let secondGrid = document.querySelector(".second-grid");

for (let i = 0; i < 100; i++) {
  const box = document.createElement("button");
  const boxSize = 100 / 10;
  box.style.height = `${boxSize}%`;
  box.style.width = `${boxSize}%`;
  box.classList.add("box");
  firstGrid.appendChild(box);
}

for (let i = 0; i < 100; i++) {
  const box = document.createElement("button");
  const boxSize = 100 / 10;
  box.style.height = `${boxSize}%`;
  box.style.width = `${boxSize}%`;
  box.classList.add("box");
  secondGrid.appendChild(box);
}
