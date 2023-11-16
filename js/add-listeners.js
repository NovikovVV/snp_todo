import { filterTasks } from "./filter-tasks.js";
import { getTasks, checkEmptyValue, checkTasks, changeCounter } from "./util.js";


// функция добавляет обработчики событий на задачу
const addListeners = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');
  const listItemClose = item.querySelector('.list__item-close');

  // двойной клик на незавершенной задаче позволяет ее редактировать
  item.addEventListener('dblclick', () => {
    if (!listItemCheck.checked) {
      const end = listItemInput.value.length;
      listItemInput.removeAttribute('disabled');
      listItemInput.setSelectionRange(end, end);
      listItemInput.focus();
    }
  });

  // помечает задачу как завершенную или снимает данный признак
  listItemCheck.addEventListener('change', () => {
    if (listItemCheck.checked) {
      listItemInput.classList.add('list__item--complete');
      listItemCheck.setAttribute('checked', 'checked');
      listItemCheck.checked = true;
    } else {
      listItemInput.classList.remove('list__item--complete');
      listItemCheck.removeAttribute('checked');
      listItemCheck.checked = false;
    }

    changeCounter();
    filterTasks(getTasks());
  });

  // уход фокуса с поля задачи возвращает ей заблокированное состояние
  // если пользователь полностью стер текст задачи, и увел фокус - удаляет задачу
  listItemInput.addEventListener('focusout', () => {
    listItemInput.setAttribute('disabled', 'disabled');
    listItemInput.setAttribute('value', listItemInput.value);
    checkEmptyValue(listItemInput);
    checkTasks();
  });

  // по нажатию enter возвращает задаче заблокированное состояние
  listItemInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      listItemInput.setAttribute('disabled', 'disabled');
      listItemInput.setAttribute('value', listItemInput.value);
    }
    checkTasks();
  });

  // по нажатию на крестик удаляет задачу
  listItemClose.addEventListener('click', () => {
    listItemClose.parentNode.remove();
    changeCounter();
    checkTasks();
  });

};

export {addListeners}
