import { activeState, closeState } from "./uiState.js";

export function initPopupMenu() {
    const menuBtn = document.getElementById("profileMenuBtn");
    const profileMenu = document.getElementById("profileMenu");

    if (!menuBtn || !profileMenu) return;
    let isOpen = false;
    let needOverlay = true;

    const openPopup = () => {
        profileMenu.classList.add("open");
        activeState("popup", closePopup, needOverlay);
        isOpen = true;
    }

    const closePopup = () => {
        profileMenu.classList.remove("open");
        closeState("popup");
        isOpen = false;
    }

    const togglePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closePopup() : openPopup();
    }
    menuBtn.addEventListener("click", togglePopup);
}