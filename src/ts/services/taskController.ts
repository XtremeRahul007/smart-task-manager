import { filterSubMenu } from "../components/filterMenu.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";
import { refreshTasks } from "../views/taskListView.js";
import { getLocalStateData, setFilterState, type Order, type SortBy } from "./taskProcessor.js";

export async function initTaskController() {
    const sortByRadioBtn = document.querySelectorAll('[name="tasksFilter"]') as NodeListOf<HTMLInputElement>;
    const orderRadioBtn = document.querySelectorAll('[name="orderButton"]') as NodeListOf<HTMLInputElement>;
    sortByRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = (e.target as HTMLInputElement).value as SortBy;
            filterSubMenu(value);
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
/*export type SortBy = "currentDate" | "dueDate" | "priority" | "title";*/
export function rehydrateFilterFields() {
    const sortByID = {
        currentDate: "sortByCurrentDate",
        dueDate: "sortByDueDate",
        priority: "sortByPriority",
        title: "sortByTitle"
    }
    const orderID = {
        asc: "AscBtn",
        desc: "DescBtn"
    }
    const searchBarInput = document.getElementById("searchBar") as HTMLInputElement;
    const stateData = getLocalStateData("filterState");

    searchBarInput.value = stateData.search;
    checkRadioBtn(sortByID[stateData.sortBy]);
    checkRadioBtn(orderID[stateData.order]);
}