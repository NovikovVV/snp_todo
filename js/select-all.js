import { filterTasks } from "./filter-tasks.js";
import { changeCounter, getTasks } from "./util.js"

const selectAllButton = document.querySelector('.select-all')

selectAllButton.addEventListener('click', function () {
  const tasks = getTasks();

  tasks.forEach((item) => {
    const listItemCheck = item.querySelector('.list__item-check');
    const listItemInput = item.querySelector('.list__item-input');
    listItemInput.classList.add('list__item--complete');
    listItemCheck.setAttribute('checked', 'checked');
  })

  changeCounter();
  filterTasks(tasks);
})