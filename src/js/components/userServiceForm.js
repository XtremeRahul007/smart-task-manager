import { closeState, activeState } from "../state/uiState.js";

export function initUserServiceForm() {
    const form = document.getElementById("userServiceForm");
    /*const btn = document.getElementById("test_trigger");*/

    if (!form) return;

    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = false;

    const openForm = () => {
        form.classList.add("open");
        activeState("userServiceForm", closeForm, needOverlay, dismissibleOverlay);
        isOpen = true;
    }

    const closeForm = () => {
        form.classList.remove("open");
        closeState("userServiceForm");
        isOpen = false;
    }

    const toggleForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeForm : openForm();
    }

    /*btn.addEventListener("click", toggleForm);*/
}