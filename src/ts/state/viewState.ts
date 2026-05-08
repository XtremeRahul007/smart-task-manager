import { showToast } from "../services/toastService.js";
import { checkRadioBtn } from "../utils/checkRadio.js";
import { renderView } from "../views/viewManager.js";

export type View = "tasks" | "create" | "edit" | "idle" | "inspect";

type ViewState = {
    current: View | null,
    previous: View | null;
}

export const viewState: ViewState = {
    current: null,
    previous: null
}

export function setView(newView: View) {
    if (viewState.current === newView) return;

    viewState.previous = viewState.current;
    viewState.current = newView;

    renderView();
    showToast(`Current: ${viewState.current} & Prevoius: ${viewState.previous}`, "info");
}


export function initLandingView() {
    document.addEventListener("DOMContentLoaded", () => {
        setView("idle"); 
        checkRadioBtn("idleView");
    });

}