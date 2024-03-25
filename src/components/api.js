const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-9",
    headers: {
      authorization: "d72ca8f2-17a7-43c2-bebf-9085bde7812b",
      "Content-Type": "application/json",
    },
  };
  
  function getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  
  const getCards = () => {
    return fetch(config.baseUrl + "/cards", {
      headers: config.headers,
    }).then(getResponseData);
  };
  
  const getInformation = () => {
    return fetch(config.baseUrl + "/users/me", {
      headers: config.headers,
    }).then(getResponseData);
  };
  
  const sendingCard = async (name, link) => {
    const res = await fetch(config.baseUrl + "/cards", {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    return await getResponseData(res);
  };
  
  const sendingInformation = async (name, about) => {
    const res = await fetch(config.baseUrl + "/users/me", {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
    return await getResponseData(res);
  };
  
  const sendingAvatar = async (avatar) => {
    const res = await fetch(config.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    });
    return await getResponseData(res);
  };
  
  const deleteCard = async (cardId) => {
    const res = await fetch(config.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    });
    return await getResponseData(res);
  };
  
  const addLike = async (cardId) => {
    const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    });
    return await getResponseData(res);
  };
  
  const deleteLike = async (cardId) => {
    const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    });
    return await getResponseData(res);
  };
  
  export { getCards,
           getInformation,
           sendingInformation,
           sendingAvatar,
           sendingCard,
           deleteCard,
           addLike,
           deleteLike };