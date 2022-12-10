const fibonacci = function(number) {
  let num1 = 0;
  let num2 = 1;
  let result;
  number = parseInt(number);

  if (number === 0) {
    return num1;
  } else if (number === 1) {
    return num2;
  } else if (number > 1) {
    for (let i = 2; i <= number; i++) {
      result = num1 + num2;
      num1 = num2;
      num2 = result;
    }
    return result;
  } else if (number < 1) {
    return 'OOPS';
  }
};

// Do not edit below this line
module.exports = fibonacci;
