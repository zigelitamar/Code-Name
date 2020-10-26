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

router.get("/newBoard", (req, res) => {
  board = randomWords(25);
  board.forEach((element) => {
    while (nonWordsDictionary.includes(element)) {
      element = randomWords();
    }
  });
  res.send(board);
});
module.exports = router;
