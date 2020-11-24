/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  let result = 1;
  while (n) {
    result = result * n--;
  }
  return result;
}
