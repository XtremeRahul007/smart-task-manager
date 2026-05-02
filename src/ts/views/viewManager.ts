import { viewState } from "../state/viewState.js";
import { initCreateTaskView} from "./createTaskView.js";
import { initEditTaskView } from "./editTaskView.js";
import { initIdleView } from "./idleView.js";
import { createTask, editTask, taskList, idleView, inspectTask } from "./taskFormView.js";
import { initTaskList } from "./taskListView.js";


export function renderView() {
    const container = document.getElementById("appTaskContainer");

    if (!container) return;

    switch (viewState.current) {
        case "create":
            container.innerHTML = createTask();
            initCreateTaskView();
            break;

        case "edit":
            container.innerHTML = editTask();
            initEditTaskView();
            break;

        case "tasks":
            container.innerHTML = taskList();
            initTaskList();
            break;

        case "idle":
            container.innerHTML = idleView();
            initIdleView();
            break;
        case "inspect":
            container.innerHTML = inspectTask();
         // initInspectTask();
            break;
    }
}

// Have to add cancel button.