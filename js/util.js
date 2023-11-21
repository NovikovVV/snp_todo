// собирает все созданные задачи на странице и преобразовывает их в массив
const getTasks = () => Array.from(document.querySelectorAll('.todo-list .todo-list__item'));

// находит текущий активный фильтр
const getActiveFilter = () => document.querySelector('.selected');

// проверяет что в поле ввода текста есть значение, если текста нет - удаляет задачу
const checkEmptyValue = (item) => {
  if (!item.textContent.trimEnd()) {
    item.parentNode.remove();
    changeCounter();
  };
};

//показывает или скрывает список задач
// проверяется наличие 2 и более "детей", т.к. 1 ребенок это блок с кнопками
const checkTasks = () => {
  const list = document.querySelector('.todo-list');

  getTasks().length ? list.classList.remove('hidden') : list.classList.add('hidden');
};

// обновляет счетчик активных задач
const changeCounter = () => {
  const counterValue = document.querySelector('.counter__value');
  const tasks = document.querySelectorAll('.list__item-input:not(.list__item--complete)');

  counterValue.textContent = tasks.length;
};

// проверяет что в поле ввода текст начинается с символов, а не с пробелов
const checkEmptyField = (item) => item.value = item.value.trim();

// помечает задачу как выполненную
const markAsCompleted = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');

  listItemCheck.setAttribute('checked', 'checked');
  listItemInput.classList.add('list__item--complete');
  listItemCheck.checked = true;
};

// помечает задачу как невыполненную
const markAsIncomplete = (item) => {
  const listItemCheck = item.querySelector('.list__item-check');
  const listItemInput = item.querySelector('.list__item-input');

  listItemInput.classList.remove('list__item--complete');
  listItemCheck.removeAttribute('checked');
  listItemCheck.checked = false;
};

  const util = {
    getTasks,
    getActiveFilter,
    checkEmptyValue,
    checkTasks,
    changeCounter,
    checkEmptyField,
    markAsCompleted,
    markAsIncomplete
  };


export { util };
