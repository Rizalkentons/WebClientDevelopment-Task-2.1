// 1. Fahrenheit to Celsius Conversion
function fahrenheitToCelsius(fahrenheit) {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}
console.log(`32°F → ${fahrenheitToCelsius(32)}°C`);
