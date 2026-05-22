import { filterSubMenu } from "../components/filterMenu.js";
import { refreshTasks } from "../views/taskListView.js";
import { setFilterState, type Order, type SortBy } from "./taskProcessor.js";

export async function initTaskController() {
    const sortByRadioBtn = document.querySelectorAll('[name="tasksFilter"]') as NodeListOf<Element>;
    const orderRadioBtn = document.querySelectorAll('[name="orderButton"]') as NodeListOf<Element>;
    const subMenu = document.querySelector(".filter-sub-menu") as HTMLUListElement;

    sortByRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = (e.target as HTMLInputElement).value as SortBy;
            filterSubMenu(value);
            subMenu.classList.add("open");
            setFilterState({ sortBy: value });
            await refreshTasks();
        });
    });

    orderRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = (e.target as HTMLInputElement).value as Order;
            setFilterState({ order: value });
            await refreshTasks();
        });
    });
}

