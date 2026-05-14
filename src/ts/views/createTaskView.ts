import { createNewTask } from "../db/tasks.js";
import { showToast } from "../services/toastService.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { textCounter } from "../utils/textCounter.js";

export function initCreateTaskView() {
    const title = document.getElementById("taskTitle") as HTMLInputElement;
    const date = document.getElementById("taskDueDate") as HTMLInputElement;
    const desc = document.getElementById("descriptionTextArea") as HTMLTextAreaElement;
    const form = document.getElementById("createTaskView") as HTMLButtonElement;

    form?.addEventListener("submit", async (e: Event) => {
        e.preventDefault();

        const task = {
            title: title.value.trim(),
            description: desc.value.trim(),
            dueDate: date.value,
            currentDate: new Date().toISOString().split('T')[0],
            priority: getSelectedPriority() as "low" | "medium" | "high"
        }

        await createNewTask(task);
        showToast(`Task: ${task.title}, ${task.dueDate}, ${task.description}, ${task.priority}`, "info");
        setView("tasks");
        checkRadioBtn("taskList");
        console.log(task);
    });

    form?.addEventListener("reset", () => {
        setView("tasks");
        checkRadioBtn("taskList");
    });

    textCounter("descriptionTextArea", "descTextCounter", 5000);
    textCounter("taskTitle", "titleTextCounter", 200);
}

export function getSelectedPriority(): string {
    const selectedPriority = document.querySelector('input[name="radioPriority"]:checked') as HTMLInputElement | null;

    if (selectedPriority) {
        return selectedPriority.value;
    } else {
        return "low";
    }
}