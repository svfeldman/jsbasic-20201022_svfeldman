/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let res = str.toLowerCase();
  if ((res = res.includes("1xbet") || res.includes("xxx"))) {
    return true;
  } else {
    return false;
  }
}
