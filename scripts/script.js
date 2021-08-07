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
      board[i] = "";
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
        boardContainer.item(winCombos[i][0]).style.color = "red";
        boardContainer.item(winCombos[i][1]).style.color = "red";
        boardContainer.item(winCombos[i][2]).style.color = "red";
        return true;
      }
    }

    return false;
  }

  function placeMove(e) {
    changeTurn();
    moves -= 1;
    board[e.target.getAttribute("data-num")] = turn.getSign();
    return turn.getSign();
  }

  function replay() {
    setBoard();
    moves = BOARD_SQUARES;
    turn = playerO;
    for (let i = 0; i < BOARD_SQUARES; i++) {
      boardContainer.item(i).textContent = "";
      boardContainer.item(i).style.color = "white";
    }
    tac.style.color = "black";
    outcome.innerHTML = "&nbsp;";
  }

  const boardContainer = document.getElementById("game-container").childNodes;
  setBoard();

  return { placeMove, retMoves, checkWin, replay };
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
    if (playGame.checkWin() || playGame.retMoves() === 0) {
      return;
    } else if (e.target.textContent === "") {
      e.target.textContent = playGame.placeMove(e);
    }
    if (playGame.checkWin()) {
      winner(e);
    } else if (playGame.retMoves() === 0) {
      tie();
    }
  }

  function winner(e) {
    tac.style.color = "red";
    let winner = e.target.textContent;
    outcome.innerHTML = "The winner is: <span>" + winner + "</span>";
  }
  function tie() {
    outcome.textContent = "There was a tie";
  }

  outcome.innerHTML = "&nbsp;";
  const playGame = gameController;
  document.getElementById("replay-button").onclick = playGame.replay;
  createBoard();
})();
