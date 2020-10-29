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
  "of",
  "any",
  "each",
];
console.log(nonWordsDictionary[5]);
router.get("/newBoard", (req, res) => {
  board = randomWords(25);
  board.forEach((element) => {
    while (nonWordsDictionary.includes(element)) {
      element = randomWords();
    }
  });
  res.send(board);
});
router.post("/guess", (req, res) => {});
module.exports = router;
