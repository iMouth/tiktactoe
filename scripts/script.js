const BOARD_SQUARES = 9;

const gameBoard = (() => {
  const board = new Array(BOARD_SQUARES);
  for (let i = 0; i < BOARD_SQUARES; i++) {
    board[i] = "square" + (i + 1);
  }
  return { board };
})();

const player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameController = (() => {
  playerX = player("X");
  playerO = player("O");

  let turn = playerO.getSign();
  function changeTurn() {
    turn = turn === "O" ? playerX.getSign() : playerO.getSign();
  }

  function placeMove() {
    changeTurn();
    return turn;
  }
  return { placeMove };
})();

const displayController = (() => {
  function createBoard() {
    const boardContainer = document.getElementById("game-container");
    for (let i = 0; i < BOARD_SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", "sqaure" + (i + 1));
      boardContainer.appendChild(square);
      square.addEventListener("click", placeMove);
    }
  }

  function placeMove(e) {
    if (e.target.textContent === "") {
      e.target.textContent = playGame.placeMove();
      console.log(e);
    }
  }

  const playArea = gameBoard;
  const playGame = gameController;
  createBoard();
  return { createBoard };
})();
