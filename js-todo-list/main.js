// TO DO
window.addEventListener('DOMContentLoaded', function(){

  let list = document.querySelectorAll('li')
  list.forEach(list => list.addEventListener('click',function(){
    list.classList.toggle('checked')
  }))

  let cross = document.querySelectorAll('.close')
  cross.forEach(cross => cross.addEventListener('click',function(){
    document.querySelector('li').remove()
  }))


  document.getElementById('addBtn').addEventListener('click', function(){
    let input = document.getElementById('input').value


    const span = document.createElement('span')
    span.className = 'close'
    span.textContent = 'x'

    
    const div = document.createElement('li')
    
    div.insertAdjacentElement('beforeend', span)
    
    div.textContent = input
    
    document.querySelector('ul').insertAdjacentElement('beforeend', div)
  })
  
})
