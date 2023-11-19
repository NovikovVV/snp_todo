import { createUtil } from "./util.js";

const util = createUtil();

// сохраняет данные перед перед тем как пользователь обновляет или закрывает страницу
window.addEventListener('beforeunload', () => {
  localStorage.clear();
  const data = util.getTasks();
  data.forEach((item, i) => {
    localStorage.setItem(i, item.outerHTML);
  });
});
