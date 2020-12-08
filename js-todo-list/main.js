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



})
    
    

    
    
    
    
  
