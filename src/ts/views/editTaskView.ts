import { setView } from "../state/viewState.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { textCounter } from "../utils/textCounter.js";

export function initEditTaskView() {
    const form = document.getElementById("editTaskView");

    form?.addEventListener("submit", () => {
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