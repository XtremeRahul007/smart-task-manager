import { setFilterState } from "../services/taskProcessor.js";
import { setView, viewState } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";
import { refreshTasks } from "../views/taskListView.js";
export function searchBarFocus() {
    const searchBarInput = document.getElementById("searchBar");
    const searchBtn = document.getElementById("searchBth");
    const searchContainer = document.querySelector(".search-container");
    let searchTimeOut;
    searchBtn.addEventListener("click", () => {
        searchBarInput.focus();
    });
    searchContainer.addEventListener("click", () => {
        if (viewState.current !== "tasks") {
            setView("tasks");
            checkRadioBtn("taskList");
        }
    });
    searchBarInput.addEventListener("input", (e) => {
        const target = e.target;
        const currentValue = target.value;
        clearTimeout(searchTimeOut);
        searchTimeOut = window.setTimeout(() => {
            setFilterState({ search: currentValue });
            refreshTasks();
        }, 300);
    });
}
//# sourceMappingURL=searchBar.js.map