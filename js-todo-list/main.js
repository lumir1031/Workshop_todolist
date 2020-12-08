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
    list[i].addEventListener('click', function () {
      list[i].classList.toggle('checked')
    })
    allx[i].addEventListener('click', function() {
      list[i].remove()
    })
  }
})