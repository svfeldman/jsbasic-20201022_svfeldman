/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = str.split('-');

  // это был первый вариант писал сам по учебнику, правильный наверное с исмользованием метода map()
  // for (let i = 0; i < arr.length; i++) {
  //   if (i != 0) {
  //     arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  //   }
  // }
  // return arr.join('');

  // этот вариант не понимаю... :(
  return arr.map((w, i) => i == 0 ? w : w[0].toUpperCase() + w.slice(1)).join('');
}
