import { filterTasks } from "./filter-tasks.js";
import { changeCounter, getTasks } from "./util.js"

const markAllTasks = function () {
  const tasks = getTasks();
  tasks.forEach(function (item) {
    const listItemCheck = item.querySelector('.list__item-check');
    const listItemInput = item.querySelector('.list__item-input');

    if (!listItemCheck.checked) {
      listItemCheck.setAttribute('checked', 'checked');
      listItemInput.classList.add('list__item--complete');
      listItemCheck.checked = true;
    }
  })
};

const unmarkAtllTasks = function () {
  const tasks = getTasks();
  tasks.forEach((item) => {
    const listItemCheck = item.querySelector('.list__item-check')
    const listItemInput = item.querySelector('.list__item-input');
    listItemInput.classList.remove('list__item--complete');
    listItemCheck.removeAttribute('checked');
    listItemCheck.checked = false;
  })
}

const isAllCompleted = () => {
  const tasks = getTasks();
  return tasks.every((item) => {
    const mark = item.querySelector('.list__item-check').checked;
    return mark;
  })
}

const selectAllButton = document.querySelector('.select-all');
selectAllButton.addEventListener('click', function () {
  const tasks = getTasks();

  isAllCompleted() ? unmarkAtllTasks() : markAllTasks();
  changeCounter();
  filterTasks(tasks);
})