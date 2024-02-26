const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(!arr[0]) {return 0};
	return arr.reduce( (total, item) => total += item);
};

const multiply = function(arr) {
  return arr.reduce( (total, current) => total *= current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a == 0) { return 1 };

	for (let i = a - 1; i > 1; i--) {
    a *= i
  }

  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(factorial(5));