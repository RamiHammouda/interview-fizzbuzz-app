//This function take a number as its paramemter
//It will return fizz if i is multiple by 3
//It will return buzz if i is multiple by 3
//It will return fizzBuzz if i is multiple by 3 and 5
function solve(i) {
  return i % 3 == 0
    ? i % 5 == 0
      ? 'FizzBuzz'
      : 'Fizz'
    : i % 5 == 0
    ? 'Buzz'
    : i;
}

module.exports.solve = solve; //export the solve function to the modules
