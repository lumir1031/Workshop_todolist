// TO DO
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addBtn').addEventListener('click', function() {
    let toDoMessage = document.getElementById('input').value;
    let ul = document.getElementById('ul');
    if (toDoMessage.length > 0) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.classList.add('close');
      span.textContent = "x";
      li.textContent = toDoMessage;
      li.appendChild(span);
      document.querySelector('ul').appendChild(li);
    };
    let toDoDeletes = document.querySelectorAll('span').forEach(
      span => {
        span.addEventListener('click', () => {
          span.closest("li").remove();
        });
      }
    );
    let toDoElements = document.querySelectorAll('li').forEach(
      li => {
        li.addEventListener('click', () => {
          li.classList.toggle("checked");
        });
      }
    );
  });
  let toDoElements = document.querySelectorAll('li').forEach(
    li => {
      li.addEventListener('click', () => {
        li.classList.toggle("checked");
      });
    }
  );
  let toDoDeletes = document.querySelectorAll('span').forEach(
    span => {
      span.addEventListener('click', () => {
        span.closest("li").remove();
      });
    }
  );
});
