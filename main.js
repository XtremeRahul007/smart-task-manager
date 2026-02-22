import { overLayToggle } from "./modules/overLay.js";
import { initPopupMenu } from "./modules/popupMenu.js";
import { initSidebar } from "./modules/sideBar.js";
import { activeState, closeState } from "./modules/uiState.js";

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