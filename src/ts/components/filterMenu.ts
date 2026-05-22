import { initTaskController } from "../services/taskController.js";
import type { SortBy } from "../services/taskProcessor.js";
import { activeState, closeState } from "../state/uiState.js";

export let refCloseFilterMenu: (() => void) | null = null;

export function initFilterMenu() {
    const menuBtn = document.querySelector("#filterTaskBtn") as HTMLButtonElement;
    const filterMenu = document.querySelector(".filter-menu-container") as HTMLUListElement;
    const subMenu = document.querySelector(".filter-sub-menu") as HTMLUListElement;

    if (!menuBtn || !filterMenu) return;
    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = true;

    const openFilterMenu = () => {
        filterMenu.classList.add("open");
        activeState("filterMenu", closeFilterMenu, needOverlay, dismissibleOverlay);
        isOpen = true;
    }

    const closeFilterMenu = () => {
        subMenu.classList.remove("open");
        filterMenu.classList.remove("open");
        closeState("filterMenu");
        isOpen = false;
    }
    refCloseFilterMenu = closeFilterMenu;

    const togglePopup = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeFilterMenu() : openFilterMenu();
    }
    menuBtn.addEventListener("click", togglePopup);
    initTaskController();
}

export function filterSubMenu(sortBy: SortBy) {
    interface Orders {
        asc: string,
        desc: string
    }

    let orders: Orders = {
        asc: "Oldest First",
        desc: "Latest First"
    };

    switch (sortBy) {
        case "currentDate":
            orders = {
                asc: "Oldest First",
                desc: "Latest First"
            };
            break;
        case "dueDate":
            orders = {
                asc: "Oldest First",
                desc: "Latest First"
            };
            break;
        case "priority":
            orders = {
                asc: "Low → High",
                desc: "High → Low"
            };
            break;
        case "title":
            orders = {
                asc: "A → Z",
                desc: "Z → A"
            };
            break;
    }

    const ascBtn = document.getElementById("ascBtn") as HTMLDivElement;
    const descBtn = document.getElementById("descBtn") as HTMLDivElement;
    ascBtn.textContent = `${orders.asc}`;
    descBtn.textContent = `${orders.desc}`;
}