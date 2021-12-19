const express = require('express');
const app = express();
const port = 3000;

//Our function
function solve(i) {
  return i % 3 == 0
    ? i % 5 == 0
      ? 'FizzBuzz'
      : 'Fizz'
    : i % 5 == 0
    ? 'Buzz'
    : i;
}

// log to port 3000 'can be deleted'
// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// log to console
//listening to port 3000 for a connection
app.listen(port, () => {
   //loop used to log the generated fizzbuzz numbers from 1 to 100
  for (var i = 1; i <= 100; i++) {
    console.log(solve(i));
  }
});
