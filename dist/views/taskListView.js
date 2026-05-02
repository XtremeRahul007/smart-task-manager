import { openDB } from "../db/indexedDB.js";
import { getAllTasks, renderTask } from "../db/tasks.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
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
    renderTask(tasks);
}
//# sourceMappingURL=taskListView.js.map