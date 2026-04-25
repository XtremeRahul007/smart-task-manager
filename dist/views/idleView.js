import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
export function initIdleView() {
    const createTaskBtn = document.getElementById("createTaskTrigger");
    const taskListBtn = document.getElementById("taskListTrigger");
    const radioID = document.getElementById("createTask");
    createTaskBtn?.addEventListener("click", () => {
        checkRadioBtn(radioID);
        setView("create");
    });
    taskListBtn?.addEventListener("click", () => setView("tasks"));
}
//# sourceMappingURL=idleView.js.map