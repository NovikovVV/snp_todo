import "./remove-complete.js";
import "./beforeunload.js";
import "./load-data.js";
import { createListItem } from "./create-list-item.js";
import { filterTasks } from "./filter-tasks.js";
import { getTasks,  changeCounter} from "./util.js";

const form = document.querySelector('.build__form');
const formInput = form.querySelector('.build__form-input');
const list = document.querySelector('.todo-list');
const controls = list.querySelector('.todo-list__controls');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (formInput.value && formInput.value.indexOf(' ') !== 0) {
    list.classList.remove('hidden');
    controls.after(createListItem(formInput.value));
    filterTasks(getTasks());
    changeCounter();
    formInput.value = '';
  }
});
