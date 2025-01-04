const convertToCelsius = function(farenheit) {
  let celsiusCalculate = (farenheit - 32) * 5/9;
  let celsiusRounded = Math.round(celsiusCalculate * 10) /10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  let farenheitCalculate = (celsius * (9/5)) + 32;
  let farenheitRounded = Math.round(farenheitCalculate * 10) / 10;
  return farenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
