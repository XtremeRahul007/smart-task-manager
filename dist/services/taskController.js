import { filterSubMenu } from "../components/filterMenu.js";
import { refreshTasks } from "../views/taskListView.js";
import { setFilterState } from "./taskProcessor.js";
export async function initTaskController() {
    const sortByRadioBtn = document.querySelectorAll('[name="tasksFilter"]');
    const orderRadioBtn = document.querySelectorAll('[name="orderButton"]');
    const subMenu = document.querySelector(".filter-sub-menu");
    sortByRadioBtn.forEach((radio) => {
        radio.addEventListener("change", async (e) => {
            const value = e.target.value;
            filterSubMenu(value);
            subMenu.classList.add("open");
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
//# sourceMappingURL=taskController.js.map