import { loginUser } from "./api.js";
import { setToken, setUser } from "../index.js";
import { renderMainPage } from "./renderMainPage.js";

export function renderLogin() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div>
            <h2>Автоирзция</h2>
            <div class="login-form add-form" ><input id="login" type="text" class="add-form-name" placeholder="Введите логин">
                <input id="password" type="password" class="add-form-text" placeholder="Введите пароль">
                <div class="add-form-row">
                    <button id="sign-in" class="add-form-button">Авторизоватся</button>
                </div>
            </div>
        </div>`;

  initLoginListener();
}

function initLoginListener() {
  const loginInput = document.querySelector("#login");
  const passwordInput = document.querySelector("#password");
  const signInButton = document.querySelector("#sign-in");
  signInButton.addEventListener("click", () => {
    if (loginInput.value.trim() === "" || passwordInput.value.trim() === "") {
      alert("Пожалуйста, введите ваш логин или пароль!");
      return;
    }
    loginUser(loginInput.value, passwordInput.value)
      .then((result) => {
        setUser(result.user);
        setToken(result.user.token);
        renderMainPage();
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}