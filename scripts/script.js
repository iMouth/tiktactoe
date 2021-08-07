const BOARD_SQUARES = 9;

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

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const board = [];
  let moves = BOARD_SQUARES;
  let turn = playerO;

  function retMoves() {
    return moves;
  }
  function setBoard() {
    for (let i = 0; i < BOARD_SQUARES; i++) {
      board.push("");
    }
  }
  function changeTurn() {
    turn = turn.getSign() === "O" ? playerX : playerO;
  }

  function checkWin() {
    for (let i = 0; i < winCombos.length; i++) {
      if (
        board[winCombos[i][0]] === board[winCombos[i][1]] &&
        board[winCombos[i][0]] === board[winCombos[i][2]] &&
        board[winCombos[i][0]] != ""
      ) {
        return true;
      }
    }
    return false;
  }

  function placeMove(e) {
    changeTurn();
    moves -= 1;
    board[e.target.getAttribute("data-num")] = turn.getSign();
    let x = checkWin();
    console.log(x);
    return turn.getSign();
  }

  setBoard();

  return { placeMove, retMoves };
})();

const displayController = (() => {
  function createBoard() {
    const boardContainer = document.getElementById("game-container");
    for (let i = 0; i < BOARD_SQUARES; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("data-num", i);
      boardContainer.appendChild(square);
      square.addEventListener("click", placeMove);
    }
  }

  function placeMove(e) {
    if (e.target.textContent === "") {
      e.target.textContent = playGame.placeMove(e);
    }
    if (playGame.retMoves() === 0) {
      tie();
    }
  }

  function tie() {
    outcome = document.getElementById("outcome");
    outcome.textContent = "There was a tie";
  }

  const playGame = gameController;
  createBoard();
})();
