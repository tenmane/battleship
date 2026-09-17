import "./style.css";
import "./DOM/events.js";
import { renderBoard } from "./DOM/render.js";
import { Player } from "./control/player.js";

const defaultOne = new Player("defaultOne", true);
const defaultTwo = new Player("defaultTwo", true);
renderBoard(defaultOne.gameBoard, document.querySelector(".first-grid"));
renderBoard(defaultTwo.gameBoard, document.querySelector(".second-grid"));
