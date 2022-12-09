const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...numbers]) {
  let total = 0;
  for (const num of numbers) {
    total += parseInt(num);
  }

	return total;
};

const multiply = function([...numbers]) {
  const array = [...numbers];
  let total = 0;
  total = array.reduce(function(a, b) {
    return parseInt(a) * parseInt(b);
  });
  return total;
  }


const power = function(a, b) {
	let total = 0;
  total = Math.pow(a, b); 
  return total;
};

const factorial = function(a) {
	let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i; 
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
