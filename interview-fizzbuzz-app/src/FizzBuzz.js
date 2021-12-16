const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  for (var i = 1; i <= 100; i++) {
    console.log(solve(i));
  }
});

app.listen(port, () => {
  for (var i = 1; i <= 100; i++) {
    console.log(solve(i));
  }
});

function solve(i) {
  return i % 3 == 0
    ? i % 5 == 0
      ? 'FizzBuzz'
      : 'Fizz'
    : i % 5 == 0
    ? 'Buzz'
    : i;
}

module.exports.solve = solve;
