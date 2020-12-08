// TO DO
window.addEventListener('DOMContentLoaded', function(){

  let list = document.querySelectorAll('li')
  list.forEach(list => list.addEventListener('click',function(){
    list.classList.toggle('checked')
  }))
 
  // let cross = document.querySelectorAll('.close')
  // for(let i = 0; i< list.length; i++){
  //   cross[i].addEventListener('click', function(){
  //     list[i].remove()
  //   })
  // }


  let cross = document.querySelectorAll('.close')
  cross.forEach(cross => cross.addEventListener('click', function(event){
    event.target.parentNode.remove()
  }))


  document.getElementById('addBtn').addEventListener('click', function(){
    let input = document.getElementById('input').value
    const span = document.createElement('span')
    const li = document.createElement('li')
    span.className = 'close'
    span.textContent = 'x'
    li.textContent = input
    li.insertAdjacentElement('beforeend', span)
    if(input != ''){
      document.querySelector('ul').insertAdjacentElement('beforeend', li)
      console.log(input)
      input = ''
    }




    li.addEventListener('click', function(){
      li.classList.toggle('checked')
    })


    // let list = document.querySelectorAll('li')
    // list.forEach(list => list.addEventListener('click',function(){
    //   list.classList.toggle('checked')
    // }))



    let cross = document.querySelectorAll('.close')
    cross.forEach(cross => cross.addEventListener('click', function(event){
      event.target.parentNode.remove()
    }))

  })
})
    
    

    
    
    
    
  
