document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('li').addEventListener('click', function() {
    console.log('123')

    var checkLi = document.createElement('li')
    this.classList.toggle('checked')


  document.querySelector('li').addEventListener('click', function() {
    var checkLi = document.createElement('li')
    this.classList.toggle('checked')
  })
  })
})