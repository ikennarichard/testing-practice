// returns string length or error
const stringLength = (str) => str.length >= 1 && str.length  <= 10 ? str.length : 'Error: str not between 1 and 10';

// takes str and returns it reversed
const reverseString = (str) => str.split('').reverse().join('');

//return capitalized string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);


module.exports = {stringLength, reverseString, capitalize};