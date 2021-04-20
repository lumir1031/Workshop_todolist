// TO DO
document.addEventListener('DOMContentLoaded', function () {
  const toDoElements = document.querySelectorAll('li').forEach(
    li => {
      li.addEventListener('click', () => {
        li.classList.toggle("checked");
      });
    }
  );
  const toDoDeletes = document.querySelectorAll('span').forEach(
    span => {
      span.addEventListener('click', () => {
        span.closest("li").remove();
      });
    }
  );
  
})
