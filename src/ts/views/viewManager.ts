import { viewState } from "../state/viewState.js";
import { initCreateTaskView, initTextareaCounter } from "./createTaskView.js";
import { initIdleView } from "./idleView.js";
import { createTask, editTask, taskList, idleView } from "./taskFormView.js";


export function renderView() {
    const container = document.getElementById("appTaskContainer");

    if (!container) return;

    switch (viewState.current) {
        case "create":
            container.innerHTML = createTask();
            initCreateTaskView();
            initTextareaCounter();
            break;

        case "edit":
            container.innerHTML = editTask();
            break;

        case "tasks":
            container.innerHTML = taskList();
            break;

        case "idle":
            container.innerHTML = idleView();
            initIdleView();
            break;
    }
}

// Have to add cancel button.