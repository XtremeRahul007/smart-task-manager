import { subscribe, getState } from "../state/uiState.js";

export function overLayToggle(): void {

    const overLay = document.getElementById("overLay");
    subscribe((activeComponent) => {
        if (activeComponent?.needOverlay) {
            overLay?.classList.add("active");
        }
        else {
            overLay?.classList.remove("active");
        }

        if (activeComponent?.dismissibleOverlay === false) {
            overLay!.style.zIndex  = "900";
        }
        else {
            overLay!.style.zIndex = "100";
        }

    });

    overLay?.addEventListener("click", () => {
        const activeComponent = getState();
        if (activeComponent && activeComponent?.dismissibleOverlay) {
            activeComponent.close();
        }
    });
}