import { filterTasks } from "./filter-tasks.js";
import { createUtil } from "./util.js"

const util = createUtil();

// находит все задачи на странице
// проходится по каждому элементу, и если элемент не отмечен как исполненный -
// устанавливает признак выполнения
const markAllTasks = () => {
  const tasks = util.getTasks();
  tasks.forEach((item) => {
    const listItemCheck = item.querySelector('.list__item-check');
    if (!listItemCheck.checked) {
      util.markAsCompleted(item);
    }
  })
};

// находит все задачи на странице
// проходится по каждому элементу, и снимает признак выполнения
const unmarkAtllTasks = () => {
  const tasks = util.getTasks();
  tasks.forEach((item) => {
    util.markAsIncomplete(item)
  })
}

// проверяет все ли задачи на странице отмечены как выполненные
const isAllCompleted = () => {
  const tasks = util.getTasks();
  return tasks.every((item) => {
    const mark = item.querySelector('.list__item-check').checked;
    return mark;
  })
}

const selectAllButton = document.querySelector('.select-all');
selectAllButton.addEventListener('click', () => {
  const tasks = util.getTasks();

  isAllCompleted() ? unmarkAtllTasks() : markAllTasks();
  util.changeCounter();
  filterTasks(tasks);
})
