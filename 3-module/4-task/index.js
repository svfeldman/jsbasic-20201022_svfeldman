/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let res = users.filter(function(uobj) {
    if (uobj.age <= age) {
      return true;
    } else {
      return false;
    }
  }).map(function(uobj) {
    return uobj.name + ', ' + uobj.balance;
  });
  return res.join('\n');
}
