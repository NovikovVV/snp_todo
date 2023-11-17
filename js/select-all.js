import { filterTasks } from "./filter-tasks.js";
import { createUtil } from "./util.js"

const util = createUtil();

const markAllTasks = () => {
  const tasks = util.getTasks();
  tasks.forEach((item) => {
    const listItemCheck = item.querySelector('.list__item-check');
    const listItemInput = item.querySelector('.list__item-input');

    if (!listItemCheck.checked) {
      listItemCheck.setAttribute('checked', 'checked');
      listItemInput.classList.add('list__item--complete');
      listItemCheck.checked = true;
    }
  })
};

const unmarkAtllTasks = () => {
  const tasks = util.getTasks();
  tasks.forEach((item) => {
    const listItemCheck = item.querySelector('.list__item-check')
    const listItemInput = item.querySelector('.list__item-input');
    listItemInput.classList.remove('list__item--complete');
    listItemCheck.removeAttribute('checked');
    listItemCheck.checked = false;
  })
}

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
