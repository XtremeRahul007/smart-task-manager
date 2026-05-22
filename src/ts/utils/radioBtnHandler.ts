type radioIDs = "idleView" | "createTask" | "taskList";

export function checkRadioBtn(radioID: radioIDs) {
    const ID = document.getElementById(radioID) as HTMLInputElement;
    if (ID) {
        ID.checked = true;
    }
}

export function getSelectedRadioBtn(Elements: string, DefaultValue: string): string {
    const selectedPriority = document.querySelector(Elements) as HTMLInputElement | null;
    if (selectedPriority) {
        return selectedPriority.value;
    } else {
        return DefaultValue;
    }
}