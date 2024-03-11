import "../pages/index.css";

export function createCard({ name, link }, handleCardClick, handleDeleteClick, handleLikeClick) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    
    const image = cardElement.querySelector(".card__image");
    image.src = link;
    image.alt = name;
    cardElement.querySelector(".card__title").textContent = name;
    
    image.addEventListener("click", () => handleCardClick(link, name));
    
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => handleDeleteClick(cardElement));
  
    const likeButton = cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", (event) => handleLikeClick(event)); // Передаем объект события в handleLikeClick
    
    return cardElement;
}
