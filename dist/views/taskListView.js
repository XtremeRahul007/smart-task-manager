import { openConfirmPopup } from "../components/confirmPopup.js";
import { openDB } from "../db/indexedDB.js";
import { deleteTask, getAllTasks, renderEmptyState, renderTask } from "../db/tasks.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { initEditTaskView } from "./editTaskView.js";
import { initInspectTaskView } from "./inspectTaskView.js";
export async function initTaskList() {
    const createTaskBtn = document.getElementById("createTaskBtn");
    const editTaskBtn = document.getElementById("editTaskBtn");
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
    const container = document.querySelector(".task-list-container");
    container?.addEventListener("click", async (e) => {
        const target = e.target;
        const card = target.closest(".task-card");
        if (!card)
            return null;
        const taskID = Number(card.dataset.id);
        const btn = target.closest('button');
        if (!btn)
            return;
        const action = btn.dataset.action;
        switch (action) {
            case "inspect":
                inspectEvent(taskID);
                break;
            case "delete":
                await deleteEvent(taskID);
                card.remove();
                break;
            case "edit":
                editEvent(taskID);
        }
    });
}
export async function deleteEvent(ID) {
    const confirmed = await openConfirmPopup({
        title: "Delete Task",
        message: "This task will be permanently deleted.",
        confirmText: "Delete"
    });
    if (!confirmed)
        return;
    await deleteTask(ID);
}
async function inspectEvent(ID) {
    setView("inspect");
    await initInspectTaskView(ID);
}
async function editEvent(ID) {
    setView("edit");
    await initEditTaskView(ID);
}
//# sourceMappingURL=taskListView.js.map