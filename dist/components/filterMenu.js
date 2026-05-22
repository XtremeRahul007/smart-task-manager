import { initTaskController } from "../services/taskController.js";
import { activeState, closeState } from "../state/uiState.js";
export let refCloseFilterMenu = null;
export function initFilterMenu() {
    const menuBtn = document.querySelector("#filterTaskBtn");
    const filterMenu = document.querySelector(".filter-menu-container");
    const subMenu = document.querySelector(".filter-sub-menu");
    if (!menuBtn || !filterMenu)
        return;
    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = true;
    const openFilterMenu = () => {
        filterMenu.classList.add("open");
        activeState("filterMenu", closeFilterMenu, needOverlay, dismissibleOverlay);
        isOpen = true;
    };
    const closeFilterMenu = () => {
        subMenu.classList.remove("open");
        filterMenu.classList.remove("open");
        closeState("filterMenu");
        isOpen = false;
    };
    refCloseFilterMenu = closeFilterMenu;
    const togglePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeFilterMenu() : openFilterMenu();
    };
    menuBtn.addEventListener("click", togglePopup);
    initTaskController();
}
export function filterSubMenu(sortBy) {
    let orders = {
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
    const ascBtn = document.getElementById("ascBtn");
    const descBtn = document.getElementById("descBtn");
    ascBtn.textContent = `${orders.asc}`;
    descBtn.textContent = `${orders.desc}`;
}
//# sourceMappingURL=filterMenu.js.map