// TO DO
document.addEventListener('DOMContentLoaded', function(){
  const List = document.querySelector('ul')
  List.addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })
})