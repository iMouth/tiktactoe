const BOARD_SQUARES = 9;

const gameBoard = () => {
  const board = new Array(BOARD_SQUARES);
  for (let i = 0; i < BOARD_SQUARES; i++) {
    board[i] = "square" + (i + 1);
  }
  return { board };
};

const playerX = () => {
  return "X";
};

const playerO = () => {
  return "O";
};

const game = (board) => {
  function createBoard() {
    const boardContainer = document.getElementById("game-container");
    for (let i = 0; i < BOARD_SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", "sqaure" + (i + 1));
      boardContainer.appendChild(square);
      square.textContent = "X";
    }
  }
  return { createBoard };
};

const test = gameBoard();
const startGame = game(test);
startGame.createBoard();
console.log(test.board);
