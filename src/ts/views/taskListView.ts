import { openConfirmPopup } from "../components/confirmPopup.js";
import { openDB } from "../db/indexedDB.js";
import { deleteTask, getAllTasks, renderEmptyState, renderTask } from "../db/tasks.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";

export async function initTaskList() {
    const createTaskBtn = document.getElementById("createTaskBtn") as HTMLInputElement;
    const editTaskBtn = document.getElementById("editTaskBtn") as HTMLInputElement;
    createTaskBtn?.addEventListener("click", () => {
        setView("create");
        checkRadioBtn("createTask");
    });
    editTaskBtn?.addEventListener("click", () => {
        setView("edit");
    });

    const db = await openDB();
    const tasks = await getAllTasks(db, "tasks");

    tasks.length === 0 ? renderEmptyState() : renderTask(tasks);
}

export function initTaskListEvents() {
    const container = document.querySelector(".task-list-container") as HTMLUListElement;

    container?.addEventListener("click", async (e) => {
        const target = e.target as HTMLElement;

        if (!target.classList.contains("delete-task-btn")) return;

        const card = target.closest(".task-card") as HTMLDivElement;

        if (!card) return;

        const taskID = Number(card.dataset.id);

        const confirmed = await openConfirmPopup({
            title: "Delete Task",
            message: "This task will be permanently deleted.",
            confirmText: "Delete"
        });

        if (!confirmed) return;
        
        await deleteTask(taskID);

        card.remove();
    })
}



