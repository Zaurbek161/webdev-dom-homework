
const HOST_URL = "https://wedev-api.sky.pro/api/v2/Zaurbek161";
export function getComments(token) {
    return fetch(`${HOST_URL}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке комментариев');
            }
            return response.json();
        })
};

export function postComments(name, text, token) {
    return fetch(`${HOST_URL}/comments`, {
        method: "POST",
        body: JSON.stringify({
            name,
            text,
        }),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
};

export function loginUser(login, password) {
    return fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
        .then(async (response) => {
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.error);
            }
            return response.json();
        })
};

export function signUpUser(login, name, password) {
    return fetch("https://wedev-api.sky.pro/api/user", {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        })
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
        .then(async (response) => {
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.error);
            }
            return response.json();
        })
};

export function likeComment(id, token) {
    return fetch(`${HOST_URL}/comments/${id}/toggle-like`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
        .then(async (response) => {
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.error);
            }
            return response.json();
        })
};

export function deleteComment(id, token) {
    return fetch(`${HOST_URL}/comments/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .catch((error) => {
            console.log(error.message);
            throw new Error("Не удалось сделать запрос");
        })
        .then(async (response) => {
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.error);
            }
            return response.json();
        })
};