document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelectorAll('li')
  const span = document.querySelectorAll('li > span')
  
  list.forEach(ele => ele.addEventListener('click', function(event){
    event.target.classList.toggle('checked') 
  }))

  span.forEach(ele => ele.addEventListener('click', function(event){
    event.target.parentNode.remove()
  }))

})
