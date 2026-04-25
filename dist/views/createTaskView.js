import { showToast } from "../services/toastService.js";
export function initCreateTaskView() {
    const title = document.getElementById("taskTitle");
    const date = document.getElementById("taskDueDate");
    const desc = document.getElementById("descriptionTextArea");
    const form = document.getElementById("createTaskView");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const priority = getSelectedPriority();
        const task = {
            title: title.value.trim(),
            dueDate: date.value,
            description: desc.value.trim(),
            priority
        };
        showToast(`Task: ${task.title}, ${task.dueDate}, ${task.description}, ${task.priority}`, "info");
    });
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
function textCounter(description, textCounter, textLimit) {
    const maxLength = textLimit;
    const textarea = document.getElementById(description);
    const counter = document.getElementById(textCounter);
    if (!textarea || !counter)
        return;
    counter.textContent = `${textarea.value.length} / ${maxLength}`;
    textarea.addEventListener("input", () => {
        let currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;
        if (currentLength === maxLength) {
            counter.style.color = "red";
        }
        else {
            counter.style.color = "";
        }
    });
}
export function initTextareaCounter() {
    textCounter("descriptionTextArea", "descTextCounter", 5000);
    textCounter("taskTitle", "titleTextCounter", 200);
}
//# sourceMappingURL=createTaskView.js.map