const convertToCelsius = function(t) {
  return Math.round(((t-32)/1.8)*10) / 10;
};

const convertToFahrenheit = function(t) {
  return Math.round((t*1.8+32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
