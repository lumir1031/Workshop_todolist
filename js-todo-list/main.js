// TO DO
function checked(){
  let li = document.querySelectorAll('li');

  for(i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
      this.classList.add('checked');
    })
  }

}
checked();