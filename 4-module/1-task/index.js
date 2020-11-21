/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let newUl = document.createElement('ul');
  
  let fullName = friends.map((n) => {
    return n.firstName + ' ' + n.lastName;
  });

  for (let i = 0; i < fullName.length; i++) {
    if (i != -1) {
      let newLi = document.createElement('li');
      newLi.innerHTML = fullName[i];
      newUl.appendChild(newLi);
    }
  }
  return document.body.appendChild(newUl);
}

