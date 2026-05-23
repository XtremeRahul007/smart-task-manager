import { filterSubMenu } from "../components/filterMenu.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";
import { refreshTasks } from "../views/taskListView.js";
import { getLocalStateData, setFilterState } from "./taskProcessor.js";
export async function initTaskController() {
    const sortByRadioBtn = document.querySelectorAll('[name="tasksFilter"]');
    const orderRadioBtn = document.querySelectorAll('[name="orderButton"]');
    sortByRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = e.target.value;
            filterSubMenu(value);
            setFilterState({ sortBy: value });
            await refreshTasks();
        });
    });
    orderRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = e.target.value;
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
    };
    const orderID = {
        asc: "AscBtn",
        desc: "DescBtn"
    };
    const searchBarInput = document.getElementById("searchBar");
    const stateData = getLocalStateData("filterState");
    searchBarInput.value = stateData.search;
    checkRadioBtn(sortByID[stateData.sortBy]);
    checkRadioBtn(orderID[stateData.order]);
}
//# sourceMappingURL=taskController.js.map