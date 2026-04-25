import { overLayToggle } from "./components/overLay.js";
import { initPopupMenu } from "./components/popupMenu.js";
import { initSidebar } from "./components/sideBar.js";
import { initTheme } from "./theme/themeManager.js";
import { setupThemeToggle } from "./theme/themeToggle.js";
import { initUserServiceForm, initAuthController } from "./components/authForm.js";
import { initLogoutUser } from "./services/authGuard.js";
import { initAuthGuard } from "./services/authGuard.js";
import { openDB } from "./db/indexedDB.js";
import { togglePasswordVisibility } from "./services/authGuard.js";
import { searchBarFocus } from "./components/searchBar.js";
import { addClickAnimation } from "./animations/clickAnimation.js";
import { initProfileIcon } from "./components/profileIcon.js";
import { resetDatabase } from "./services/authGuard.js";
import { initCreateTaskView } from "./views/createTaskView.js";
import { viewMenuController } from "./components/sideBar.js";
import { initLandingView } from "./state/viewState.js";
import { initIdleView } from "./views/idleView.js";

const modules: Array<() => void> = [
    initPopupMenu,
    initSidebar,
    overLayToggle,
    initTheme,
    setupThemeToggle,
    initAuthController,
    initLogoutUser,
    openDB,
    togglePasswordVisibility,
    searchBarFocus,
    addClickAnimation,
    initProfileIcon,
    resetDatabase,
    initCreateTaskView,
    viewMenuController,
    initLandingView,
    initIdleView
]

function startApp() {
    const { openForm } = initUserServiceForm();

    modules.forEach((fn) => {
        try {
            fn();
            console.log(`${fn.name} initialized`);
        }
        catch (err) {
            console.warn(`${fn.name} faild: ${err}`);
        }
    });
    initAuthGuard(openForm);
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
}
else {
    startApp();
}