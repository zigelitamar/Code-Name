const randomWords = require("random-words");
const nonWordsDictionary = [
  "a",
  "an",
  "the",
  "for",
  "if",
  "from",
  "be",
  "in",
  "at",
  "by",
  "before",
  "after",
  "since",
  "be",
  "over",
  "while",
  "else",
  "of",
  "any",
  "each",
];
var gameBoard = {};
console.log(nonWordsDictionary[5]);

function createBoard() {
  board = randomWords(25);
  board.forEach((element) => {
    while (nonWordsDictionary.includes(element)) {
      element = randomWords();
    }
  });
  return initBoard(board);
}

function initBoard(board) {
  let dicBoard = {};
  board.forEach((el) => {
    dicBoard[el] = 0;
  });
  for (i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * Math.floor(25));
    dicBoard[board[random]] = 1;
  }
  console.log(dicBoard);
  return dicBoard;
}
module.exports = { createBoard };
