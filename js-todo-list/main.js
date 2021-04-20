document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(event) {
    event.target.classList.toggle('checked')
  })


  const el = document.querySelectorAll('.close')
  el.forEach(function(e){
    e.addEventListener('click', function(e) {
      e.target.parentElement.remove()
    })
  })

  document.getElementById('addBtn').addEventListener('click', function(ea){
    const value = ea.target.previousElementSibling.value
    const newLi = document.createElement('li')    
    newLi.classList.add('span')
    document.querySelector('ul').appendChild(newLi).innerHTML = value + '<span class="close">x</span>'
    
    newLi.lastChild.addEventListener('click', function(){
      newLi.remove()
    })
  })
})