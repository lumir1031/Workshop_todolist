// TO DO
window.addEventListener('DOMContentLoaded', function() {
  const item = document.querySelector('li');
  item.addEventListener('click', function() {
    const item = document.querySelectorAll('li');
    item.classList.toggle('.checked');
  })
})