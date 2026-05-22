export function checkRadioBtn(radioID) {
    const ID = document.getElementById(radioID);
    if (ID) {
        ID.checked = true;
    }
}
export function getSelectedRadioBtn(Elements, DefaultValue) {
    const selectedPriority = document.querySelector(Elements);
    if (selectedPriority) {
        return selectedPriority.value;
    }
    else {
        return DefaultValue;
    }
}
//# sourceMappingURL=radioBtnHandler.js.map