function toggleText() {
  // ваш код...
  let bntText = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  bntText.addEventListener('click', () => {
    if (text.hasAttribute('hidden') === false) {
      text.setAttribute('hidden', true);
    } else {
      text.removeAttribute('hidden');
    }
  });
}
