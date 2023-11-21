import { filterTasks } from "./filter-tasks.js";
import { util } from "./util.js";

// добавление на задачу и элементов внутри нее обработчиков событий
const addListeners = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');
  const listItemClose = item.querySelector('.list__item-close');

  // по нажатию на чекбокс отмечает задачу как исполненную или снимает данный признак
  listItemCheck.addEventListener('click', () => {
    listItemCheck.checked ? util.markAsCompleted(item) : util.markAsIncomplete(item);
    util.changeCounter();
    filterTasks(util.getTasks());
  });

  listItemInput.addEventListener('dblclick', function () {
    if (!listItemCheck.checked) {
      const initialValue = listItemInput.textContent;

      listItemInput.setAttribute('contenteditable', 'true');
      listItemInput.focus();
      window.getSelection().selectAllChildren(listItemInput);
      window.getSelection().collapseToEnd();

      listItemInput.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          listItemInput.textContent = initialValue;
          listItemInput.setAttribute('contenteditable', 'false');
        };
      });
    };
  });

  listItemInput.addEventListener('focusout', function () {
    listItemInput.setAttribute('contenteditable', 'false');
    util.checkEmptyValue(listItemInput);
    util.changeCounter();
    util.checkTasks();
  });


  listItemInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      listItemInput.textContent = listItemInput.textContent.trimEnd();
      listItemInput.setAttribute('contenteditable', 'false');
      util.checkEmptyValue(listItemInput);
      util.changeCounter();
      util.checkTasks();
    };
  });

  // по нажатию на крестик удаляет задачу
  listItemClose.addEventListener('click', () => {
    listItemClose.parentNode.remove();
    util.changeCounter();
    util.checkTasks();
  });
};

export { addListeners };
