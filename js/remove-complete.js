import { checkTasks } from "./util.js";
import { changeCounter } from "./util.js";

const removeCompleteButton = document.querySelector('.remove-complete');

// по клику на кнопку - удаляет все завершенные задачи
removeCompleteButton.addEventListener('click', () => {
  const completeTasks = Array.from(document.querySelectorAll('.list__item--complete'))
  if(completeTasks) {
    completeTasks.forEach((item) => {
      item.parentNode.remove();
      changeCounter();
      checkTasks();
    })
  }
});
