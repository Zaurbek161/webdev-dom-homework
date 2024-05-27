import { fetchGetCommentsData } from "../../main.js";
import { renderForm } from "./renderForm.js";

export function renderMainPage() {
  const container = document.querySelector(".container");
  container.innerHTML = `<div class="text" style="color:white"></div>
    <ul class="comments" id="add-comment">
    Пожалуйста подождите, комментарии загружаются...
    </ul>
    <div class="form" style="color:white"></div>
    `;
  fetchGetCommentsData();
  renderForm();
}
