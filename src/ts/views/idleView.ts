import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";

export function initIdleView() {
    const createTaskBtn = document.getElementById("createTaskTrigger") as HTMLButtonElement;
    const taskListBtn = document.getElementById("taskListTrigger") as HTMLButtonElement;

    createTaskBtn?.addEventListener("click", () => {
        setView("create");
        checkRadioBtn("createTask");
    });

    taskListBtn?.addEventListener("click", () => {
        setView("tasks")
        checkRadioBtn("taskList");
    });
}