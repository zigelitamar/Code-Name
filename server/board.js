const express = require("express");
const router = express.Router();
const http = require("http").Server(express());
const randomWords = require("random-words");
const socketIO = require("socket.io")(http);
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
router.get("/newBoard", (req, res) => {
  board = randomWords(25);
  board.forEach((element) => {
    while (nonWordsDictionary.includes(element)) {
      element = randomWords();
    }
  });
  b = initBoard(board);
  gameBoard = b;
  res.send(b);
});

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

router.post("/guess", (req, res) => {
  let guess = req.body.guess;
  if (gameBoard[guess] == 1) {
    res.send(true);
  }
  res.send(false);
});
router.post("/clue", (req, res) => {
  const clue = req.body.clue;
  const guesses = req.body.num;
  socketIO.emit("clue", JSON.stringify({ word: clue, num: guesses }));
});
module.exports = router;
