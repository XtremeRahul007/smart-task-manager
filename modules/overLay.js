import { subscribe, getState } from "./uiState.js";

export function overLayToggle() {
    const overLay = document.getElementById("overLay")
    subscribe((activeComponent) => {
        if (activeComponent?.needOverlay) {
            overLay.classList.add("active");
        }
        else {
            overLay.classList.remove("active")
        }
    });

    overLay.addEventListener("click", () => {
        const activeComponent = getState();
        if (activeComponent) {
            activeComponent.close();
        }
    });
}