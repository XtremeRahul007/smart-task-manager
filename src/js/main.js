import { overLayToggle } from "./components/overLay.js";
import { initPopupMenu } from "./components/popupMenu.js";
import { initSidebar } from "./components/sideBar.js";
import { activeState, closeState } from "./state/uiState.js";

const modules = [
    initPopupMenu,
    initSidebar,
    activeState,
    closeState,
    overLayToggle
]
function startApp() {
    modules.forEach(fn => {
        try {
            fn();
            console.log(`${fn.name} initialized`)
        }
        catch (err) {
            console.warn(`${fn.name} faild: ${err}`)
        }
    })
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
}
else {
    startApp();
}