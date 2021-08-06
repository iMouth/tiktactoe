const BOARD_SQUARES = 9;

const gameBoard = () => {
  const board = new Array(BOARD_SQUARES);
  for (let i = 0; i < BOARD_SQUARES; i++) {
    board[i] = "square" + (i + 1);
  }
  return { board };
};

const player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameController = () => {};

const displayController = (() => {
  function createBoard() {
    console.log("hi");
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
})();

const test = gameBoard();
const startGame = displayController;
startGame.createBoard();
