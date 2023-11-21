import { util } from "./util.js";

const filters = document.querySelectorAll('.todo-list__controls-item');
const filtersContainer = document.querySelector('.todo-list__controls');
const allTasksFilter = filtersContainer.querySelector('.todo-list__controls-item--all');
const activeTasksFilter = filtersContainer.querySelector('.todo-list__controls-item--active');
const completeTasksFilter = filtersContainer.querySelector('.todo-list__controls-item--completed');

// добавляет обработчики событий на кнопки фильтров
// при клике на фильтр - помечает его как активный
filters.forEach((item) => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('selected')) {
      filters.forEach((item) => {
        item.classList.remove('selected')
      });
      item.classList.add('selected');

      filterTasks(util.getTasks());
    };
  });
});

// показывает все задачи на странице независимо от состояния
// в качестве аргумента принимает массив задач
const showAllTasks = (tasks) => {
  tasks.forEach((task) => {
    task.classList.remove('hidden');
  });
};

// показывает только незавершенные задачи
// в качестве аргумента принимает массив задач
const showActiveTasks = (tasks) => {
  tasks.forEach((task) => {
    const taskInput = task.querySelector('.list__item-input');

    taskInput.classList.contains('list__item--complete') ?
    task.classList.add('hidden') : task.classList.remove('hidden');
  });
};


// показывает только завершенные задачи
// в качестве аргумента принимает массив задач
const showCompleteTasks = (tasks) => {

  tasks.forEach((task) => {
    const taskInput = task.querySelector('.list__item-input');
    !taskInput.classList.contains('list__item--complete') ?
      task.classList.add('hidden') :  task.classList.remove('hidden');
  });
};

// в зависимости от того, какой фильтр сейчас активен - вызывает ту или иную функцию для отображения задач на экране
const filterTasks = (tasks) => {
  const activeFilter = util.getActiveFilter();

  switch (activeFilter) {
    case allTasksFilter:
      showAllTasks(tasks);
      break;

    case activeTasksFilter:
      showActiveTasks(tasks);
      break;

    case completeTasksFilter:
      showCompleteTasks(tasks);
      break;
  }
}

export { filterTasks };
