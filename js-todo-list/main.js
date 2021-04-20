// TO DO
document.addEventListener('DOMContentLoaded', () => {
  //const close = document.querySelectorAll('.close')

  //close.map.addEventListener('click', function(){
  //  console.log(this)
  //  console.log(this.parentNode.parentNode);
  //})

  const ul = document.querySelector('ul')

  ul.addEventListener('click', (e)=> {
    ul.removeChild(e.target.parentNode)
  })
})
