import { createNewTask } from "../db/tasks.js";
import { showToast } from "../services/toastService.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn, getSelectedRadioBtn } from "../utils/radioBtnHandler.js";
import { getTimestamp, invalidDateHandler } from "../utils/dateHandler.js";
import { textCounter } from "../utils/textCounter.js";

export async function initCreateTaskView() {
    const title = document.getElementById("taskTitle") as HTMLInputElement;
    const date = document.getElementById("taskDueDate") as HTMLInputElement;
    const desc = document.getElementById("descriptionTextArea") as HTMLTextAreaElement;
    const form = document.getElementById("createTaskView") as HTMLButtonElement;

    form?.addEventListener("submit", async (e: Event) => {
        e.preventDefault();

        const task = {
            title: title.value.trim(),
            description: desc.value.trim(),
            dueDate: getTimestamp(date.value),
            currentDate: Date.now(),
            priority: getSelectedRadioBtn('input[name="radioPriority"]:checked', "low") as "low" | "medium" | "high"
        }

        await createNewTask(task);
        // showToast(`Task: ${task.title}, ${task.dueDate}, ${task.description}, ${task.priority}`, "info");
        console.log(`Actual value got fetched: ${task.dueDate}`);
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