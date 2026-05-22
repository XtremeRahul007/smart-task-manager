import { activeState, closeState } from "../state/uiState.js";
export function initFilterMenu() {
    const menuBtn = document.querySelector("#filterTaskBtn");
    const filterMenu = document.querySelector("#filterMenu");
    if (!menuBtn || !filterMenu)
        return;
    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = true;
    const openPopup = () => {
        filterMenu.classList.add("open");
        activeState("filterMenu", closePopup, needOverlay, dismissibleOverlay);
        isOpen = true;
    };
    const closePopup = () => {
        filterMenu.classList.remove("open");
        closeState("filterMenu");
        isOpen = false;
    };
    const togglePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closePopup() : openPopup();
    };
    menuBtn.addEventListener("click", togglePopup);
}
//# sourceMappingURL=filterMenu%20.js.map