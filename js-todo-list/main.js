document.addEventListener('DOMContentLoaded', function () {
  document.body.getElementsByTagNameNS('li').addEventListener('click', function () {
    document.querySelectorAll('li').classlist.toggle('check')
  })
})
