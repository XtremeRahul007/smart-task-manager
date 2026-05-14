import { openDB } from "../db/indexedDB.js";
import { showToast } from "../services/toastService.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { textCounter } from "../utils/textCounter.js";
import { getSelectedPriority } from "./createTaskView.js";
export async function initEditTaskView(id) {
    const form = document.getElementById("editTaskView");
    const previousTask = await getTaskById(id);
    fillForm(previousTask);
    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const currentTask = getCurrentTasks(id);
        updateTask(currentTask);
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
async function getTaskById(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readonly");
        const store = tx.objectStore("tasks");
        const request = store.get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
function fillForm(tasks) {
    document.querySelector("#taskTitle").value = tasks.title;
    document.querySelector("#taskDueDate").value = tasks.dueDate;
    document.querySelector("#descriptionTextArea").value = tasks.description;
    const radios = document.querySelectorAll('input[name="radioPriority"]');
    radios.forEach(radio => {
        radio.checked = radio.value === tasks.priority;
    });
}
async function updateTask(task) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const request = store.put(task);
        request.onsuccess = () => {
            resolve(request.result);
            showToast("Task edited successfully", "success");
        };
        request.onerror = () => {
            reject(request.error);
        };
    });
}
function getCurrentTasks(id) {
    return {
        id: id,
        title: document.querySelector("#taskTitle").value,
        description: document.querySelector("#descriptionTextArea").value,
        dueDate: document.querySelector("#taskDueDate").value,
        currentDate: new Date().toISOString().split('T')[0],
        priority: getSelectedPriority()
    };
}
//# sourceMappingURL=editTaskView.js.map