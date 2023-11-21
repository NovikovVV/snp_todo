import { util } from "./util.js";

const removeCompleteButton = document.querySelector('.remove-complete');

// по клику на кнопку - удаляет все завершенные задачи
removeCompleteButton.addEventListener('click', () => {
  const completeTasks = Array.from(document.querySelectorAll('.list__item--complete'));

  completeTasks.forEach((item) => {
    item.parentNode.remove();
    util.changeCounter();
    util.checkTasks();
  });
});
