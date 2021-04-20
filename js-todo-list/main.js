// TO DO
document.addEventListener("DOMContentLoaded", function(){

  // 第一題
  document.querySelectorAll('li').forEach(function(list) {
    list.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    })
  })

  // 第二題
  document.querySelectorAll('.close').forEach(function(list) {
    list.addEventListener('click', function(e){
      e.target.parentNode.remove();
    })
  })
  // 第三題

  let input_text = document.querySelector('#input')
  let chose_plus = document.getElementById('addBtn')


  chose_plus.addEventListener('click', function(e){
    let create_li = document.createElement('li')
    let create_span = document.createElement('span')
    create_li.textContent = input_text.value
    create_span.textContent = 'x'
    create_span.classList.add('close')
    create_li.appendChild(create_span)

    if (input_text.value == '' ){
      alert('請輸入值，不能為空值。');
    } else{
      document.querySelector('ul').appendChild(create_li)
      input_text.value = ""
    }
  create_li.addEventListener('click', function(e) {
    e.target.classList.toggle('checked')
  })
  
  create_span.addEventListener('click', function(del){
      del.target.parentNode.remove()
    })
  })

})
