import { addListeners } from "./add-listeners.js";

// создает новую задачу
// функция принимает в качестве аргумента значение из текстового поля ввода
const createListItem = (value) => {
  const parser = new DOMParser();
  const template =
  `<li class="todo-list__item">
    <input class="list__item-check" type="checkbox">
    <p class="list__item-input" contenteditable="false">${value}</p>
    <button class="list__item-close"></button>
  </li>`;
  const parsedDocument = parser.parseFromString(template, 'text/html');
  const listItem = parsedDocument.body.firstChild;
  addListeners(listItem);

  return listItem;
}

export { createListItem };
