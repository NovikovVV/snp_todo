import { createUtil} from "./util.js";
import { filterTasks } from "./filter-tasks.js";
import { addListeners } from "./add-listeners.js";

const util = createUtil();

// восстанавливает сохраненные задачи пользователя
const loadData = () => {
  const parser = new DOMParser();
  const list = document.querySelector('.todo-list');

  if (localStorage.length) {
    for (let index = 0; index < localStorage.length; index++) {
      const elementDoc = localStorage[index];
      const element = parser.parseFromString(elementDoc, "text/html").querySelector('.todo-list__item');
      list.append(element);
    };
  };
};

window.addEventListener('load', () => {
  loadData();
  util.checkTasks();
  filterTasks(util.getTasks());

  util.getTasks().forEach((item) => {
    addListeners(item);
  });

  util.changeCounter();
});
