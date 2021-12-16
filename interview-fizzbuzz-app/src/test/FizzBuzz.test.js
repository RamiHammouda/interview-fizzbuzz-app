const sum = require('../FizzBuzz');

test('the number is 8 should return 8', () => {
  expect(sum.solve(8)).toEqual(8);
});

test('the number is 3 should return fizz', () => {
  expect(sum.solve(3)).toEqual('Fizz');
});

test('the number is 20 should return "buzz"', () => {
  expect(sum.solve(20)).toEqual('Buzz');
});

test('the number is 15 should return "fizzbuzz"', () => {
  expect(sum.solve(15)).toEqual('FizzBuzz');
});

// for (var i = 0; i < 100; i++) {
//   var result;
//   var b = i % 3 == 0,
//     f = i % 5 == 0;
//   f
//     ? b
//       ? (result = 'FizzBuzz')
//       : (result = 'Fizz')
//     : b
//     ? (result = 'Buzz')
//     : (result = i);
//   test(`the number is ${i} should retrun ${result}`, () => {
//     expect(sum.solve(i)).toEqual(result);
//   });
// }
