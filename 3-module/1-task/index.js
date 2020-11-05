/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let a = users.map(function(item) {
    return item.name;
  });
  return a;
}
