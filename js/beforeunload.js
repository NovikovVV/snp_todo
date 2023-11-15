import { getTasks } from "./util.js";

// сохраняет данные перед перед тем как пользователь обновляет или закрывает страницу
window.addEventListener('beforeunload', () => {
  localStorage.clear();
  const data = getTasks();
  data.forEach((item, i) => {
    localStorage.setItem(i, item.outerHTML);
  });
})
