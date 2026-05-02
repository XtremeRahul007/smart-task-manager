type radioIDs = "idleView" | "createTask" | "taskList";

export function checkRadioBtn(radioID: radioIDs) {
    const ID = document.getElementById(radioID) as HTMLInputElement;
    if (ID) {
        ID.checked = true;
    }
}