const convertToCelsius = function(tempInFahrenheit) {
const fahrenheitToCelsius = 5 / 9 * (tempInFahrenheit - 32)
return Math.round(fahrenheitToCelsius * 10) / 10
};

const convertToFahrenheit = function(tempInCelsius) {
const celsiusToFahrenheit = (9 / 5 * tempInCelsius) + 32
return Math.round(celsiusToFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
