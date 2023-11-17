import { filterTasks } from "./filter-tasks.js";
import { createUtil} from "./util.js";

const util = createUtil();

// функция добавляет обработчики событий на задачу
const addListeners = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');
  const listItemClose = item.querySelector('.list__item-close');

  // двойной клик на незавершенной задаче позволяет ее редактировать
  item.addEventListener('dblclick', () => {
    if (!listItemCheck.checked) {
      const value = listItemInput.value;
      const end = value.length;

      listItemInput.removeAttribute('disabled');
      listItemInput.setSelectionRange(end, end);
      listItemInput.focus();

      // добаляет обработчик события нажатия на кнопку esc, в этом случае
      // отменяет изменения внесенные в текст задачи
      item.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          listItemInput.setAttribute('value', value);
          listItemInput.value = value;
          listItemInput.blur();
          listItemInput.setAttribute('disabled', 'disabled');
        }
      })
    }
  });

  // помечает задачу как завершенную или снимает данный признак
  listItemCheck.addEventListener('change', () => {
    listItemCheck.checked ? util.markAsCompleted(item) : util.markAsIncomplete(item);
    util.changeCounter();
    filterTasks(util.getTasks());
  });

  // уход фокуса с поля задачи возвращает ей заблокированное состояние
  // если пользователь полностью стер текст задачи, и увел фокус - удаляет задачу
  listItemInput.addEventListener('focusout', () => {
    listItemInput.setAttribute('disabled', 'disabled');
    listItemInput.setAttribute('value', listItemInput.value);
    listItemInput.textContent = listItemInput.value;
    util.checkEmptyValue(listItemInput);
    util.checkTasks();
  });

  // по нажатию enter возвращает задаче заблокированное состояние
  listItemInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      listItemInput.setAttribute('disabled', 'disabled');
      listItemInput.setAttribute('value', listItemInput.value);
      listItemInput.textContent = listItemInput.value;
    }
    util.checkTasks();
  });

  // по нажатию на крестик удаляет задачу
  listItemClose.addEventListener('click', () => {
    listItemClose.parentNode.remove();
    util.changeCounter();
    util.checkTasks();
  });

};

export {addListeners}
