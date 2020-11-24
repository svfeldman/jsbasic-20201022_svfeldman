/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let s = str
    .split(" ")
    .join(",")
    .split(",")
    .join(",")
    .split(",")
    .filter(function (s) {
      if (s > 0 || s < 0) {
        return true;
      } else {
        return false;
      }
    });
  let res = "";
  return (res = {
    min: Math.min(...s),
    max: Math.max(...s),
  });
}
