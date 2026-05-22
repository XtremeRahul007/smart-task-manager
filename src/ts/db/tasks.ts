import { showToast } from "../services/toastService.js";
import { formatDate } from "../utils/dateHandler.js";
import { truncateText } from "../utils/formatText.js";
import { openDB } from "./indexedDB.js";

export interface Task {
    id?: number;
    title: string;
    description: string;
    dueDate: any;
    currentDate: any;
    priority: "low" | "medium" | "high";
}

export async function createNewTask(task: Task): Promise<void> {
    const db = await openDB();

    return new Promise<void>((resolve, reject) => {
        const tx = db.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");

        const request = store.add(task);

        request.onsuccess = () => {
            resolve();
            showToast("Task added successfully", "success");
        }

        request.onerror = () => {
            reject(request.error);
            showToast(`Error: ${request.error}`, "error");
        }
    });
}

export async function getAllTasks(db: IDBDatabase, storeName: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);

        const request = store.getAll();

        request.onsuccess = () => resolve(request.result ?? []);
        request.onerror = () => reject(request.error);
    });
}

export async function getTaskById(id: number): Promise<Task> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readonly");
        const store = tx.objectStore("tasks");
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export function renderTask(tasks: any[]) {
    const container = document.querySelector(".task-list-container") as HTMLUListElement;
    container.textContent = "";

    for (let index = 0; index < tasks.length; index++) {
        let task = tasks[index];

        const title = task.title;
        const id = task.id;
        const description = truncateText(task.description, 200);
        const dueDate = formatDate(task.dueDate);
        const priority = task.priority;

        const div = document.createElement("div");
        div.classList.add("task-card");
        div.classList.add(`${priority}-priority-container`);
        div.dataset.id = `${id}`;
        div.innerHTML = `<div class="task-summary">
                            <article class="task-info-section">
                                <h3 class="task-card-title">${title}</h3>
                                <div class="task-card-description">${description}</div>
                            </article>
                            <button type="button" class="task-card-action-btns inspect-task-btn" data-action="inspect">
                                <div class="icon icon-visible icon-sm"></div>
                            </button>
                        </div>
                        <div class="task-data">
                            <div class="task-meta-container">
                                <div class="task-card-duedate">${dueDate}</div>
                                <div class="task-card-priority ${priority}-priority">${priority}</div>
                            </div>
                            <div class="edit-delete-btn-container">
                                <button type="button" class="task-card-action-btns edit-task-btn" data-action="edit">
                                    <div class="icon icon-edit icon-sm"></div>
                                </button>
                                <button type="button" class="task-card-action-btns delete-task-btn" data-action="delete">
                                    <div class="icon icon-recycle icon-sm"></div>
                                </button>
                            </div>
                        </div>`;


        container.appendChild(div);
    }
}

export function renderEmptyState() {
    const container = document.querySelector(".task-list-container") as HTMLUListElement;
    if (!container) return;
    container.innerHTML = `<div class ="empty-task">No task available</div>`;
}

export async function deleteTask(id: number): Promise<void> {
    const db = await openDB();
    return new Promise<void>((resolve, reject) => {
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