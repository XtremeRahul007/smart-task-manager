import { initFilterMenu } from "../components/filterMenu.js";
import { rehydrateFilterFields } from "../services/taskController.js";
import { viewState } from "../state/viewState.js";
import { invalidDateHandler } from "../utils/dateHandler.js";
import { initCreateTaskView } from "./createTaskView.js";
import { initIdleView } from "./idleView.js";
import { createTask, editTask, taskList, idleView, inspectTask } from "./taskFormView.js";
import { initTaskList, initTaskListEvents } from "./taskListView.js";


export function renderView() {
    const container = document.getElementById("appTaskContainer");

    if (!container) return;

    switch (viewState.current) {
        case "create":
            container.innerHTML = createTask();
            initCreateTaskView();
            invalidDateHandler();
            break;

        case "edit":
            container.innerHTML = editTask();
            invalidDateHandler();
            break;

        case "tasks":
            container.innerHTML = taskList();
            initTaskList();
            initTaskListEvents();
            initFilterMenu();
            rehydrateFilterFields();
            break;

        case "idle":
            container.innerHTML = idleView();
            initIdleView();
            break;

        case "inspect":
            container.innerHTML = inspectTask();
            break;
    }
}