import { showToast } from "../services/toastService.js";

export function initCreateTaskView() {
    const title = document.getElementById("taskTitle") as HTMLInputElement;
    const date = document.getElementById("taskDueDate") as HTMLInputElement;
    const desc = document.getElementById("descriptionTextArea") as HTMLTextAreaElement;

    const form = document.getElementById("createTaskView") as HTMLButtonElement;

    form?.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const priority = getSelectedPriority();

        const task = {
            title: title.value.trim(),
            dueDate: date.value,
            description: desc.value.trim(),
            priority
        }
        showToast(`Task: ${task.title}, ${task.dueDate}, ${task.description}, ${task.priority}`, "info");
    });
}

function getSelectedPriority(): string {
    const selectedPriority = document.querySelector('input[name="radioPriority"]:checked') as HTMLInputElement | null;

    if (selectedPriority) {
        return selectedPriority.value;
    } else {
        return "low";
    }
}

function textCounter(description: string, textCounter: string, textLimit: number) {
    const maxLength: number = textLimit;
    const textarea = document.getElementById(description) as HTMLTextAreaElement | HTMLInputElement;
    const counter = document.getElementById(textCounter) as HTMLDivElement;

    if (!textarea || !counter) return;

    counter.textContent = `${textarea.value.length} / ${maxLength}`;

    textarea.addEventListener("input", () => {
        let currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;

        if (currentLength === maxLength) {
            counter.style.color = "red";
        } else {
            counter.style.color = "";
        }
    });
}

export function initTextareaCounter() {
    textCounter("descriptionTextArea", "descTextCounter", 5000);
    textCounter("taskTitle", "titleTextCounter", 200);
}