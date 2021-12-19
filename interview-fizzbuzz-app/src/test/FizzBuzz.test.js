const sum = require('../FizzBuzz'); //require used to include external modules from FizzBuzz

test('for numbers "8,13,22" non multiple by three and five print the number', () => {
  expect(sum.solve(8)).toEqual(8);
  expect(sum.solve(13)).toEqual(13);
  expect(sum.solve(22)).toEqual(22);
});

test('for numbers "3,9,18" multiples of three print "Fizz" instead of the number', () => {
  expect(sum.solve(3)).toEqual('Fizz');
  expect(sum.solve(9)).toEqual('Fizz');
  expect(sum.solve(18)).toEqual('Fizz');
});

test('for numbers "20,40,65" multiples of five print "Buzz" instead of the number', () => {
  expect(sum.solve(20)).toEqual('Buzz');
  expect(sum.solve(40)).toEqual('Buzz');
  expect(sum.solve(65)).toEqual('Buzz');
});

test('for numbers "15,45,90"  multiples of both three and five print "FizzBuzz”', () => {
  expect(sum.solve(15)).toEqual('FizzBuzz');
  expect(sum.solve(45)).toEqual('FizzBuzz');
  expect(sum.solve(90)).toEqual('FizzBuzz');
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
