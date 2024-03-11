 function closePopupByEsc(event) { 
  if (event.key === "Escape") { 
      closePopup(popup); 
  } 
}

export function openPopup(popup) { 
  popup.classList.add("popup_is-opened"); 

  document.addEventListener("keydown", closePopupByEsc); 
} 

export function closePopup(popup) { 
  popup.classList.remove("popup_is-opened"); 
  
  document.removeEventListener("keydown", closePopupByEsc); 
} 

export function closePopupByOverlay(popup) { 
  popup.addEventListener("click", (e) => { 
      if (e.target === e.currentTarget) closePopup(popup); 
  }); 
} 