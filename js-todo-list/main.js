// TO DO
document.addEventListener("DOMContentLoaded", function(){

  // 第一題
  document.querySelectorAll('li').forEach(function(list) {
    list.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    })
  })
})
