import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";

export function initIdleView() {
    const createTaskBtn = document.getElementById("createTaskTrigger") as HTMLButtonElement;
    const taskListBtn = document.getElementById("taskListTrigger") as HTMLButtonElement;
    const radioID = document.getElementById("createTask") as HTMLInputElement;

    createTaskBtn?.addEventListener("click", () => {
        checkRadioBtn(radioID);
        setView("create");
    });
    taskListBtn?.addEventListener("click", () => setView("tasks"));
}