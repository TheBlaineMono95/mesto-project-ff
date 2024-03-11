// Раздел с импортом 
import "../pages/index.css"; 
import { initialCards } from "./cards.js"; 
import { createCard } from "../components/card.js"; 
import { 
  openPopup, 
  closePopup, 
  closePopupByOverlay, 
} from "../components/modal.js"; 

// Константы для DOM-элементов 
const editProfileButton = document.querySelector(".profile__edit-button"); 
const addPlaceButton = document.querySelector(".profile__add-button"); 
const closeButtons = document.querySelectorAll(".popup__close"); 
const editProfilePopup = document.querySelector(".popup_type_edit"); 
const addPlacePopup = document.querySelector(".popup_type_new-card"); 
const imagePopup = document.querySelector(".popup_type_image"); 
const editProfileForm = editProfilePopup.querySelector(".popup__form"); 
const nameInput = editProfileForm.querySelector(".popup__input_type_name"); 
const jobInput = editProfileForm.querySelector(".popup__input_type_description"); 
const profileName = document.querySelector(".profile__title"); 
const profileJob = document.querySelector(".profile__description"); 
const placesList = document.querySelector(".places__list"); 
const addPlaceForm = document.querySelector(".popup_type_new-card .popup__form"); 
const placeNameInput = addPlaceForm.querySelector(".popup__input_type_card-name");
const placeLinkInput = addPlaceForm.querySelector(".popup__input_type_url");

// Константы для элементов попапа изображения
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption"); 

function handleDeleteClick(cardElement) { 
  cardElement.remove(); 
} 

function handleLikeClick(event) { 
  event.target.classList.toggle("card__like-button_is-active"); 
} 

function fillProfileForm() { 
  nameInput.value = profileName.textContent; 
  jobInput.value = profileJob.textContent; 
} 

function handleProfileEditFormSubmit(evt) { 
  evt.preventDefault(); 
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value; 
  closePopup(editProfilePopup); 
} 

function handleAddPlaceSubmit(evt) { 
  evt.preventDefault(); 
  const placeName = placeNameInput.value;
  const placeLink = placeLinkInput.value;
  const newCard = createCard({ name: placeName, link: placeLink }, openImagePopup, handleDeleteClick, handleLikeClick); 
  placesList.prepend(newCard); 
  closePopup(addPlacePopup); 
  addPlaceForm.reset(); 
} 

function openImagePopup(link, name) { 
  imagePopupImage.src = link; 
  imagePopupImage.alt = name; 
  imagePopupCaption.textContent = name; 
  openPopup(imagePopup); 
} 

function setEventListeners() { 
  editProfileButton.addEventListener("click", () => { 
    fillProfileForm(); 
    openPopup(editProfilePopup); 
  }); 

  addPlaceButton.addEventListener("click", () => openPopup(addPlacePopup)); 

  closeButtons.forEach((button) => { 
    button.addEventListener("click", () => closePopup(button.closest(".popup"))); 
  }); 

  editProfileForm.addEventListener("submit", handleProfileEditFormSubmit); 
  addPlaceForm.addEventListener("submit", handleAddPlaceSubmit); 

  document.querySelectorAll(".popup").forEach((popup) => { 
    closePopupByOverlay(popup); 
  }); 
} 

function initCards() { 
  initialCards.forEach((cardData) => { 
    placesList.appendChild(createCard(cardData, openImagePopup, handleDeleteClick, handleLikeClick)); 
  }); 
} 

function initApp() { 
  setEventListeners(); 
  initCards(); 
} 

initApp();