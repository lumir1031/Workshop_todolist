// TO DO
window.addEventListener('DOMContentLoaded', function () {
  // 1-forEach寫法
  const list = document.querySelectorAll('li')
  list.forEach(item => item.addEventListener('click', function() {
    item.classList.toggle('checked')
  })
  )
  // 1-for 迴圈寫法
  // for (let i = 0; i < list.length; i++) {
  //   list[i].addEventListener('click', function () {
  //     list[i].classList.toggle('checked')
  //   })
  // }

  // 2-for 迴圈寫法
  const allx = document.querySelectorAll('.close')
  for (let i = 0; i < list.length; i++) {
    allx[i].addEventListener('click', function () {
      list[i].remove()
    })
  }

  // 3
  const addBtn = document.querySelector('.addBtn')
  addBtn.addEventListener('click', function() {
    const input = document.getElementById('input').value
    const newSpan = document.createElement('span')
    newSpan.className = 'close'
    newSpan.textContent = 'x'
    const newLi = document.createElement('li')
    newLi.textContent = input
    newLi.insertAdjacentElement('beforeend', newSpan)

    // 再做第1步，但陣列名稱不能重複定義
    newLi.addEventListener('click', function(e){
      e.target.classList.toggle('checked')
    })

      

    if (input != '') {
      document.querySelector('ul').insertAdjacentElement('beforeend', newLi);
      document.getElementById('input').value = ""  //欄位清空
    } else {
      alert('Please text something.')
    }

    // 再做第2步
    const allx = document.querySelectorAll('.close')
    const list = document.querySelectorAll('li')
    for (let i = 0; i < list.length; i++) {
      allx[i].addEventListener('click', function () {
        list[i].remove()
      })
    }
  })

  



})