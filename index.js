// returns string length or error
const stringLength = (str) => str.length >= 1 && str.length  <= 10 ? true : 'Error: str not between 1 and 10';

module.exports = stringLength;