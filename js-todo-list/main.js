document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('li').forEach(function(list){
    list.addEventListener('click', function(e){
      e.target.classList.toggle('checked')
    })
  })
    document.querySelectorAll('span').forEach(function(list){
      list.addEventListener('click', function(e){
        e.target.parentNode.remove()
      })
    })
})
  
