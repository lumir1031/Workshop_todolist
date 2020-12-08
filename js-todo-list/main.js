// TO DO
document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelector('ul')
  list.addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })
})