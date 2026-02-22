import { activeState, closeState } from "./uiState.js";

export function initSidebar() {
    const menuBtn = document.getElementById("asideMenuBtn");
    const sideBar = document.getElementById("sideBar");

    if (!menuBtn || !sideBar) return;
    let isOpen = false;
    let needOverlay = true;
     
    const openSidebar = () => {
        sideBar.classList.add("open");
        menuBtn.classList.add("no-bg");
        activeState("sideBar", closeSidebar, needOverlay);
        isOpen = true;
    }

    const closeSidebar = () => {
        sideBar.classList.remove("open");
        menuBtn.classList.remove("no-bg");
        closeState("sideBar");
        isOpen = false;
    }

    const toggleSidebar = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeSidebar() : openSidebar();
    }
    menuBtn.addEventListener("click", toggleSidebar);
};