// собирает все созданные задачи на странице и преобразовывает их в массив
const getTasks = () => {
  const list = document.querySelector('.todo-list');
  const tasks = Array.from(list.querySelectorAll('.todo-list__item'));
  return tasks;
};

// находит текущий активный фильтр
const getActiveFilter = () => {
  const buttonsContainer = document.querySelector('.todo-list__controls');
  const activeFilter = buttonsContainer.querySelector('.selected');
  return activeFilter;
};

// проверяет что в поле ввода текста есть значение, если текста нет - удаляет задачу
const checkEmptyValue = (item) => {
  if (!item.value) {
    item.parentNode.remove();
    changeCounter();
  }
};

//показывает или скрывает список задач
// проверяется наличие 2 и более "детей", т.к. 1 ребенок это блок с кнопками
const checkTasks = () => {
  const list = document.querySelector('.todo-list');
  if (list.children.length === 1) {
    list.classList.add('hidden');
  } else {
    list.classList.remove('hidden');
  }
};

// обновляет счетчик активных задач
const changeCounter = () => {
  const counter = document.querySelector('.counter');
  const counterValue = counter.querySelector('.counter__value');
  const tasks = document.querySelectorAll('.list__item-input:not(.list__item--complete)');
  counterValue.textContent = tasks.length;
};

// проверяет что в поле ввода текст начинается с символов, а не с пробелов
const checkEmptyField = (item) => {
  if (!item.value.indexOf(' ')) {
    item.value = '';
  }
};

const createUtil = () => {
  const util = {
    'getTasks': getTasks,
    'getActiveFilter': getActiveFilter,
    'checkEmptyValue': checkEmptyValue,
    'checkTasks': checkTasks,
    'changeCounter': changeCounter,
    'checkEmptyField': checkEmptyField
  };

  return util;
};

export {createUtil};
