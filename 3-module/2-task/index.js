/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let res = arr.filter(function(item) {
    if (item >= a && item <= b) {
      return item;
    }
  });
  return res;
}
