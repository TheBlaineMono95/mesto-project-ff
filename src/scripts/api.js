export const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-9",
    headers: {
      authorization: "d72ca8f2-17a7-43c2-bebf-9085bde7812b",
      "Content-Type": "application/json",
    },
  };
  
  export const getResData = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };
 
  export const getUserInfo = async () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  export const getInitialCards = async () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  ///
  export const getInitialInfo = async () => {
    return Promise.all([getUserInfo(), getInitialCards()]);
  };
  
  export const editProfile = async (userProfileName, userProfileAbout) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: userProfileName,
        about: userProfileAbout,
      }),
    }).then((res) => getResData(res));
  };
  
 
  export const postNewCard = async (nameCard, linkCard) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: nameCard,
        link: linkCard,
      }),
    }).then((res) => getResData(res));
  };

  export const putLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  
  export const deleteLike = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  export const deleteMyCard = async (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => getResData(res));
  };
  
  export const updateNewAvatar = async (avatarLink) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then((res) => getResData(res));
  };