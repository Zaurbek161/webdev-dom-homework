import { commentsData, user } from "../index.js";
import {
    initCommentListener,
    initDeleteButtonsListeners,
    initLikeListener,
} from "./listeners.js";
import { escapeHTML } from "./helper.js";
import { format } from "date-fns";


export function renderComments() {
    const commentsList = document.querySelector(".comments");
    commentsList.innerHTML = "";


    commentsData.forEach((comment) => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
    if (user) {
        initCommentListener();
        initDeleteButtonsListeners();
    }
}


export function createCommentElement(comment) {
    const newComment = document.createElement("li");
    newComment.classList.add("comment");
    const likeClass = comment.liked ? " -active-like" : "";
    newComment.innerHTML = `
<div class="comment-header">
  <div>${escapeHTML(comment.author)}</div>
  <div>${format(new Date(comment.dateTime), "yyyy/MM/dd")}</div>
</div>
<div class="comment-body">
  <div class="comment-text">${escapeHTML(comment.text)}</div>
</div>
<div class="comment-footer">
  <button class="delete-form-button" data-index="${comment.id}">Удалить</button>
  <div class="likes">
    <span class="likes-counter">${comment.likes}</span>
    <button data-index="${comment.id}" class="like-button${likeClass}"></button>
  </div>
</div>`;
    if (user) {
        initLikeListener(newComment);
    }


    return newComment;
}