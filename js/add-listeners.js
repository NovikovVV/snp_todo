import { filterTasks } from "./filter-tasks.js";
import { createUtil } from "./util.js";

const util = createUtil();

// функция добавляет обработчики событий на задачу
const addListeners = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');
  const listItemClose = item.querySelector('.list__item-close');

  // двойной клик на незавершенной задаче позволяет ее редактировать
  listItemInput.addEventListener('dblclick', function () {
    if (!listItemCheck.checked) {
      util.enableField(this);
      const originalValue = this.value;

      // добавляет обработчик события нажатия на кнопку esc, в этом случае
      // отменяет изменения внесенные в текст задачи
      this.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          this.value = originalValue;
          this.textContent = originalValue;
          util.disableField(this);
        };
      });
    };
  });

  // возвращает задаче заблокированное состояние
  // если пользователь полностью стер текст задачи - удаляет задачу
  listItemInput.addEventListener('focusout', function () {
    util.disableField(this);
    util.changeCounter();
    util.checkTasks();
    filterTasks(util.getTasks());
  });

  // по нажатию enter возвращает задаче заблокированное состояние
  // если пользователь полностью стер текст задачи - удаляет задачу
  listItemInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      util.disableField(this);
      util.changeCounter();
      util.checkTasks();
      filterTasks(util.getTasks());
    };
  });

  listItemInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !listItemCheck.checked) {
    }
  })

  // помечает задачу как завершенную или снимает данный признак
  listItemCheck.addEventListener('click', () => {
    listItemCheck.checked ? util.markAsCompleted(item) : util.markAsIncomplete(item);
    util.changeCounter();
    filterTasks(util.getTasks());
  });

  // по нажатию на крестик удаляет задачу
  listItemClose.addEventListener('click', () => {
    listItemClose.parentNode.remove();
    util.changeCounter();
    util.checkTasks();
  });
};

export { addListeners }
