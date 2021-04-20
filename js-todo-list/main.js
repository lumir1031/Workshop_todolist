document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelectorAll('li')
  const span = document.querySelectorAll('li > span')
  
  //完成功能
  list.forEach(ele => ele.addEventListener('click', function(event){
    event.target.classList.toggle('checked') 
  }))

  //刪除功能
  span.forEach(ele => ele.addEventListener('click', function(event){
    event.target.parentNode.remove()
  }))

  //新增功能
  document.querySelector('#addBtn').addEventListener('click', function(){
    const inputTask = document.querySelector('#input')
    const newTask = document.createElement('li')
    const close = document.createElement('span')
    newTask.textContent = inputTask.value
    close.textContent = 'x'
    close.classList.add('close')

    console.log(inputTask.value);
    newTask.insertAdjacentElement('beforeend', close)

    newTask.addEventListener('click', function(event){
      event.target.classList.toggle('checked')
    })
    close.addEventListener('click', function(event){
      event.target.parentNode.remove()
    })
    
    if (inputTask.value != ''){
      document.querySelector('ul').insertAdjacentElement('beforeend', newTask)
      inputTask.value = ''
    }
    
  })
})
