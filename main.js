import { initPopupMenu } from "./modules/popupMenu.js";
import { initSidebar } from "./modules/sideBar.js";

const modules = [
    initPopupMenu,
    initSidebar
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