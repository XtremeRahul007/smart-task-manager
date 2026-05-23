import { setFilterState } from "../services/taskProcessor.js";
import { setView, viewState } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";
import { refreshTasks } from "../views/taskListView.js";

export function searchBarFocus() {
    const searchBarInput = document.getElementById("searchBar") as HTMLInputElement;
    const searchBtn = document.getElementById("searchBth") as HTMLInputElement;
    const searchContainer = document.querySelector(".search-container") as HTMLDivElement;
    let searchTimeOut: number;

    searchBtn.addEventListener("click", () => {
        searchBarInput.focus();
    });

    searchContainer.addEventListener("click", () => {
        if (viewState.current !== "tasks") {
            setView("tasks");
            checkRadioBtn("taskList");
        }
    });

    searchBarInput.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const currentValue: string = target.value;

        clearTimeout(searchTimeOut);
        searchTimeOut = window.setTimeout(() => {
            setFilterState({ search: currentValue });
            refreshTasks();
        }, 300);
    });


}
