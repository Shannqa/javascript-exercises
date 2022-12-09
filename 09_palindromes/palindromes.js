const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/\W/g, '');
  const array = newString.split('');
  const reverse = array.reverse();
  let reverseString = reverse.join('');
  if (newString === reverseString) {
    return true;
    
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
