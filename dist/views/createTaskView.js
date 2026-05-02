import { createNewTask } from "../db/tasks.js";
import { showToast } from "../services/toastService.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { textCounter } from "../utils/textCounter.js";
export function initCreateTaskView() {
    const title = document.getElementById("taskTitle");
    const date = document.getElementById("taskDueDate");
    const desc = document.getElementById("descriptionTextArea");
    const form = document.getElementById("createTaskView");
    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const task = {
            title: title.value.trim(),
            description: desc.value.trim(),
            dueDate: date.value,
            priority: getSelectedPriority()
        };
        await createNewTask(task);
        showToast(`Task: ${task.title}, ${task.dueDate}, ${task.description}, ${task.priority}`, "info");
        setView("tasks");
        checkRadioBtn("taskList");
    });
    form?.addEventListener("reset", () => {
        setView("tasks");
        checkRadioBtn("taskList");
    });
    textCounter("descriptionTextArea", "descTextCounter", 5000);
    textCounter("taskTitle", "titleTextCounter", 200);
}
function getSelectedPriority() {
    const selectedPriority = document.querySelector('input[name="radioPriority"]:checked');
    if (selectedPriority) {
        return selectedPriority.value;
    }
    else {
        return "low";
    }
}
//# sourceMappingURL=createTaskView.js.map