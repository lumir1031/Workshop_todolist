// TO DO
window.addEventListener('DOMContentLoaded', function() {
  // 1-forEach寫法
  // const list document.querySelectorAll('li')
  // list.forEach()

  // 1-for 迴圈寫法
  const list = document.querySelectorAll('li');
    for(let i=0; i<list.length; i++) {
      list[i].addEventListener('click', function() {
      list[i].classList.toggle('checked')
      })
    }

  // const x = document.querySelector('close')
  // x.addEventListener('click', function() {
  
  // })
})