import { activeState, closeState } from "../state/uiState.js";
import { setView } from "../state/viewState.js";

let closeSidebarRef: (() => void) | null = null;

export function initSidebar() {
    const menuBtn = document.getElementById("asideMenuBtn");
    const sideBar = document.getElementById("sideBar");

    if (!menuBtn || !sideBar) return;
    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = true;

    const openSidebar = () => {
        sideBar.classList.add("open");
        menuBtn.classList.add("no-bg");
        activeState("sideBar", closeSidebar, needOverlay, dismissibleOverlay);
        isOpen = true;
    }

    const closeSidebar = () => {
        sideBar.classList.remove("open");
        menuBtn.classList.remove("no-bg");
        closeState("sideBar");
        isOpen = false;
    }

    closeSidebarRef = closeSidebar;

    const toggleSidebar = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeSidebar() : openSidebar();
    }
    menuBtn.addEventListener("click", toggleSidebar);
};

export function viewMenuController() {
    const radioBtns = document.querySelectorAll('[name="viewRender"]');

    radioBtns.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            const value: any = (e.target as HTMLInputElement).value;
            setView(value);
            closeSidebarRef?.();
        });
    });
}
