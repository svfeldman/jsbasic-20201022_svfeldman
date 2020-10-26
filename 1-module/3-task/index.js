/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (str != "undefined" && str.length >= 1) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  } else if (str.includes("''") != true) { 
    return '';   
  } else {
    return false;
  } 
}
