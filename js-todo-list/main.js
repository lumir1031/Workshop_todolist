// TO DO
function checked(){
  let li = document.querySelectorAll('li');

  for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
      this.classList.add('checked');
    })
  }
}
checked();

function remove(){
  let close = document.querySelectorAll('.close');
  // console.log(close);
  for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      this.parentElement.remove();
    })
  }
}
remove();



