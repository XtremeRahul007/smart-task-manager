import { getTaskById } from "../db/tasks.js";
import { setView } from "../state/viewState.js";
import { formatDate } from "../utils/dateHandler.js";
import { deleteEvent, editEvent } from "./taskListView.js";
export async function initInspectTaskView(id) {
    const container = document.querySelector(".inspect-task-view");
    const task = await getTaskById(id);
    const taskID = task.id;
    const title = task.title;
    const description = task.description;
    const dueDate = formatDate(task.dueDate);
    const currentDate = formatDate(task.currentDate);
    const priority = task.priority;
    if (!container || !taskID)
        return;
    container.innerHTML = `<div class="inspect-header">
                                <div class="inspect-header-meta">
                                    <h3 class="inspect-header-text">Title:</h3>
                                    <div class="inspect-create-date">Created at: ${currentDate}</div>
                                </div>
                                <div class="inspect-title-content" id="inspectTitle">${title}</div>
                            </div>
                            <div class="inspect-body">
                                <div class="inspect-body-meta">
                                    <div class="inspect-desc-text">Description:</div>
                                    <div class="inspect-dueDate">Due date: ${dueDate}</div>
                                </div>
                                <div class="inspect-description-content" id="inspectDescription">${description}</div>
                            </div>
                            <div class="inspect-footer">
                                <div class="inspect-footer-meta">
                                    <div class="inspect-task-priority">Priority:  ${priority}</div>
                                    <div class="inspect-action-btn-container">
                                        <button type="button" class="inspect-action-btns" data-action="back">
                                            <div class="icon icon-back icon-sm"></div>
                                        </button>
                                        <button type="button" class="inspect-action-btns" data-action="delete">
                                            <div class="icon icon-recycle icon-sm"></div>
                                        </button>
                                        <button type="button" class="inspect-action-btns" data-action="edit">
                                            <div class="icon icon-edit icon-sm"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>`;
    const actionBtnContainer = document.querySelector(".inspect-action-btn-container");
    actionBtnContainer?.addEventListener("click", async (e) => {
        const target = e.target;
        const btn = target.closest('button');
        if (!btn)
            return;
        const action = btn.dataset.action;
        switch (action) {
            case "back":
                container.innerHTML = "";
                setView("tasks");
                break;
            case "delete":
                await deleteEvent(taskID);
                setView("tasks");
                break;
            case "edit":
                await editEvent(taskID);
                break;
        }
    });
}
//# sourceMappingURL=inspectTaskView.js.map