import { showToast } from "../services/toastService.js";
import { truncateText } from "../utils/formatText.js";
import { openDB } from "./indexedDB.js";
export async function createNewTask(task) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const request = store.add(task);
        request.onsuccess = () => {
            resolve();
            showToast("Task added successfully", "success");
        };
        request.onerror = () => {
            reject(request.error);
            showToast(`Error: ${request.error}`, "error");
        };
    });
}
export async function getAllTasks(db, storeName) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result ?? []);
        request.onerror = () => reject(request.error);
    });
}
export function renderTask(tasks) {
    const container = document.querySelector(".task-list-container");
    tasks.forEach(tasks => {
        const title = tasks.title;
        const id = tasks.id;
        const description = truncateText(tasks.description, 200);
        const dueDate = tasks.dueDate;
        const priority = tasks.priority;
        const div = document.createElement("div");
        div.classList.add("task-card");
        div.classList.add(`${priority}-priority-container`);
        div.dataset.id = `${id}`;
        div.innerHTML = `<div class="task-summary">
                            <article class="task-info-section">
                                <h3 class="task-card-title">${title}</h3>
                                <div class="task-card-description">${description}</div>
                            </article>
                            <button type="button" class="task-card-action-btns" id="inspectTaskBtn">
                                <div class="icon icon-visible icon-sm"></div>
                            </button>
                        </div>
                        <div class="task-data">
                            <div class="task-meta-container">
                                <div class="task-card-duedate">${dueDate}</div>
                                <div class="task-card-priority ${priority}-priority">${priority}</div>
                            </div>
                            <div class="edit-delete-btn-container">
                                <button type="button" class="task-card-action-btns" id="editTaskBtn">
                                    <div class="icon icon-edit icon-sm"></div>
                                </button>
                                <button type="button" class="task-card-action-btns delete-task-btn">
                                    <div class="icon icon-recycle icon-sm delete-icon"></div>
                                </button>
                            </div>
                        </div>`;
        container.appendChild(div);
    });
}
export function renderEmptyState() {
    const container = document.querySelector(".task-list-container");
    if (!container)
        return;
    container.innerHTML = `<div class ="empty-task">No task available</div>`;
}
export async function deleteTask(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const request = store.delete(id);
        request.onsuccess = () => {
            resolve();
            showToast("Task deleted successfully", "success");
        };
        request.onerror = () => reject(request.error);
    });
}
//# sourceMappingURL=tasks.js.map