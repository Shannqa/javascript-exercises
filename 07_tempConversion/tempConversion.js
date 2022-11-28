const convertToCelsius = function(temp) {
  
  let tempC = Math.round(((temp - 32) * 5 / 9) * 10) / 10; 
  return tempC;
};
  
const convertToFahrenheit = function(temp) {

  let tempF = Math.round((temp * 9 / 5 + 32) * 10) / 10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
