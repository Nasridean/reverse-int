module.exports = function reverse (n) {
  return n.toString().split('').reverse().filter((digit, index) => (digit !== '0' || index !== 0) && digit !== '-').join('');
}
