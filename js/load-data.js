import { checkTasks, getTasks, changeCounter } from "./util.js";
import { filterTasks } from "./filter-tasks.js";
import { addListeners } from "./add-listeners.js";


// восстанавливает сохраненные задачи пользователя
const loadData = () => {
  const parser = new DOMParser();
  const list = document.querySelector('.todo-list');

  if (localStorage.length) {
    for (let index = 0; index < localStorage.length; index++) {
      const elementDoc = localStorage[index];
      const element = parser.parseFromString(elementDoc, "text/html").querySelector('.todo-list__item');
      list.append(element)
    }
  }
};

window.addEventListener('load', () => {
  loadData();
  checkTasks();
  filterTasks(getTasks());

  getTasks().forEach((item) => {
    addListeners(item)
  });

  changeCounter();
})
