import { user } from "../index.js";
import { initFormListeners } from "./listeners.js";
import { renderLogin } from "./renderLogin.js";

export function renderForm() {
  const formContainer = document.querySelector(".form");
  const formHTML = `<div class="add-form"><input type="text" value="${user?.name}" readonly class="add-form-name" placeholder="Введите ваше имя">
    <textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
    <div class="add-form-row">
      <button class="add-form-button">Написать</button>
    </div>
  </div>`;
  formContainer.innerHTML = user
    ? formHTML
    : `<div>Пожалуйста <a href="#" class="login-link">авторизуйтесь</a></div>`;

  if (user) {
    initFormListeners();
  } else {
    const loginLink = document.querySelector(".login-link");
    loginLink.addEventListener("click", () => {
      renderLogin();
    });
  }
}