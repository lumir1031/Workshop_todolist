// TO DO
document.addEventListener('DOMContentLoaded', function () {
  const toDoElements = document.querySelectorAll('li').forEach(
    li => {
      li.addEventListener('click', () => {
        li.classList.toggle("checked");
    });
  });

  
})
