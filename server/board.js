const express = require("express");
const router = express.Router();
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
];

router.get("/newBoard", async (req, res) => {
  board = randomWords(25);
  board.forEach((element) => {
    while (nonWordsDictionary.includes(element)) {
      element = randomWords();
    }
  });
  b = await initBoard(board);
  res.send(b);
});

async function initBoard(board) {
  let dicBoard = {};
  board.forEach((el) => {
    dicBoard[el] = 0;
  });
  for (i = 0; i < 10; ) {
    let random = Math.floor(Math.random() * Math.floor(25));
    if (dicBoard[board[random]] == 0) {
      dicBoard[board[random]] = 1;
      i++;
    }
  }
  console.log(dicBoard);
  return dicBoard;
}
module.exports = router;
