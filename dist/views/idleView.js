import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/radioBtnHandler.js";
export function initIdleView() {
    const createTaskBtn = document.getElementById("createTaskTrigger");
    const taskListBtn = document.getElementById("taskListTrigger");
    createTaskBtn?.addEventListener("click", () => {
        setView("create");
        checkRadioBtn("createTask");
    });
    taskListBtn?.addEventListener("click", () => {
        setView("tasks");
        checkRadioBtn("taskList");
    });
}
//# sourceMappingURL=idleView.js.map