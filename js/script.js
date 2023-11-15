import "./remove-complete.js";
import "./beforeunload.js";
import "./load-data.js";
import { createListItem } from "./create-list-item.js";
import { filterTasks } from "./filter-tasks.js";
import { getTasks,  changeCounter, checkEmptyField} from "./util.js";

const form = document.querySelector('.build__form');
const formInput = form.querySelector('.build__form-input');
const list = document.querySelector('.todo-list');
const controls = list.querySelector('.todo-list__controls');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (formInput.value && formInput.value.indexOf(' ')) {
    list.classList.remove('hidden');
    controls.after(createListItem(formInput.value));
    filterTasks(getTasks());
    changeCounter();
    formInput.value = '';
  }
});

form.addEventListener('focusout', function (evt) {
  checkEmptyField(formInput);
})


form.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    formInput.blur();
    checkEmptyField(formInput);
  }
})
