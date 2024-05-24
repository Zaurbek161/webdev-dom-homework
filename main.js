import { getCurrentDateTime } from "./modules/helper.js";
import { getComments, postComments } from "./modules/api.js";
import { renderComments } from "./modules/renderCom.js";
import { renderMainPage } from "./modules/renderMainPage.js";


export let commentsData = [];

export let user = null;
let token = null;

export function setUser(newUser) {
    user = newUser;
};

export function setToken(newToken) {
    token = newToken;
};

export function getToken() {
    return token
};

export const fetchGetCommentsData = () => {
    getComments(getToken()).then(responseData => {
        commentsData = responseData.comments.map(comment => ({
            author: comment.author.name,
            dateTime: getCurrentDateTime(comment.date),
            text: comment.text,
            likes: comment.likes,
            liked: comment.isLiked,
            id: comment.id,
        }));
        renderComments();
    })
        .catch((error) => {
            alert("Кажется что-то пошло не так, попробуйте похже.");
            console.warn(error);
        });

};

export const postFetch = (nameInput, commentInput, addButton, renderForm) => {
    postComments(nameInput.value, commentInput.value, getToken()).then(async (response) => {
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.error);
        }
        return response.json();
    })
        .then(() => {
            fetchGetCommentsData();
        })
        .then(() => {
            commentInput.value = "";
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            // renderForm.innerHTML = "";
            addButton.disabled = false;
            addButton.textContent = "Написать";
        });
};
renderMainPage();