import { openConfirmPopup } from "../components/confirmPopup.js";
import { openDB } from "../db/indexedDB.js";
import { getTaskById, type Task } from "../db/tasks.js";
import { showToast } from "../services/toastService.js";
import { setView } from "../state/viewState.js";
import { checkRadioBtn, getSelectedRadioBtn } from "../utils/radioBtnHandler.js";
import { formatDateForInput, getTimestamp } from "../utils/dateHandler.js";
import { textCounter } from "../utils/textCounter.js";

let refCurrentDate: number;
export async function initEditTaskView(id: number) {
    const form = document.getElementById("editTaskView");
    const previousTask = await getTaskById(id);
    fillForm(previousTask);
    refCurrentDate = previousTask.currentDate;

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const currentTask = getCurrentTasks(id);
        const confirmed = await openConfirmPopup({
            title: "Save changes?",
            message: "Are you sure you want to save the changes you made?",
            confirmText: "Save",
            cancelText: "Cancel"
        });
        if (!confirmed) return;

        updateTask(currentTask);
        setView("tasks");
        checkRadioBtn("taskList");
    });

    form?.addEventListener("reset", async (e) => {
        e.preventDefault();
        const confirmed = await openConfirmPopup({
            title: "Unsaved Changes",
            message: "Your unsaved changes will be lost if you leave this page.",
            confirmText: "Leave anyway",
            cancelText: "Stay"
        })
        if (!confirmed) return;

        setView("tasks");
        checkRadioBtn("taskList");
    });

    textCounter("descriptionTextArea", "descTextCounter", 5000);
    textCounter("taskTitle", "titleTextCounter", 200);
}

function fillForm(tasks: Task) {
    (document.querySelector("#taskTitle") as HTMLInputElement).value = tasks.title;
    (document.querySelector("#taskDueDate") as HTMLInputElement).value = formatDateForInput(tasks.dueDate);
    (document.querySelector("#descriptionTextArea") as HTMLTextAreaElement).value = tasks.description;
    const radios = document.querySelectorAll<HTMLInputElement>('input[name="radioPriority"]');
    radios.forEach(radio => {
        radio.checked = radio.value === tasks.priority;
    });
}

async function updateTask(task: Task) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const request = store.put(task);

        request.onsuccess = () => {
            resolve(request.result);
            showToast("Task edited successfully", "success");
        }
        request.onerror = () => {
            reject(request.error);
        }
    })
}


function getCurrentTasks(id: number): Task {
    return {
        id: id,
        title: (document.querySelector("#taskTitle") as HTMLInputElement).value,
        description: (document.querySelector("#descriptionTextArea") as HTMLTextAreaElement).value,
        dueDate: getTimestamp((document.querySelector("#taskDueDate") as HTMLInputElement).value),
        currentDate: refCurrentDate,
        priority: getSelectedRadioBtn('input[name="radioPriority"]:checked', "low") as "low" | "medium" | "high"
    };
}