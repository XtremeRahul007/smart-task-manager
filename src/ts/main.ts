import { openDB } from "./db/indexedDB.js";
import { initLogoutUser, initAuthGuard, togglePasswordVisibility, resetDatabase } from "./services/authGuard.js";
import { initUserServiceForm, initAuthController } from "./components/authForm.js";
import { initTheme } from "./theme/themeManager.js";
import { setupThemeToggle } from "./theme/themeToggle.js";
import { overLayToggle } from "./components/overLay.js";
import { initLandingView } from "./state/viewState.js";
import { initCreateTaskView } from "./views/createTaskView.js";
import { initIdleView } from "./views/idleView.js";
import { initPopupMenu } from "./components/popupMenu.js";
import { initSidebar, viewMenuController } from "./components/sideBar.js";
import { searchBarFocus } from "./components/searchBar.js";
import { initProfileIcon } from "./components/profileIcon.js";
import { addClickAnimation } from "./animations/clickAnimation.js";

const criticalModules: Array<() => void> = [openDB, initAuthController];

const semiCriticalModules: Array<() => void> = [overLayToggle, togglePasswordVisibility, initTheme, setupThemeToggle, initLogoutUser, resetDatabase];

const renderingModulers: Array<() => void> = [viewMenuController, initLandingView, initCreateTaskView, initIdleView];

const uiModules: Array<() => void> = [initPopupMenu, initSidebar, searchBarFocus, initProfileIcon, addClickAnimation];

async function runModules(modules: Array<() => any>, label: string) {
    for await (const fn of modules) {
        try {
            await fn();
            console.log(`[${label}] ${fn.name} initialized`);
        }
        catch (err) {
            console.warn(`[${label}] ${fn.name} failded, ${err}`);
        }
    }
}

async function startApp() {
    const { openForm } = initUserServiceForm();

    await runModules(criticalModules, "CRITICAL");

    initAuthGuard(openForm);

    await runModules(semiCriticalModules, "SEMI");

    await runModules(renderingModulers, "RENDER");

    uiModules.forEach((fn) => {
        try {
            fn();
            console.log(`[UI] ${fn.name} initialized`);
        }
        catch (err) {
            console.warn(`[UI] ${fn.name} failded`)
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
}

else {
    startApp();
}






/*
async function startApp() {
    const { openForm } = initUserServiceForm();
    await initAuthGuard(openForm);

    for await (const fn of modules) {
        try {
            await fn();
            console.log(`${fn.name} initialized`);
        }
        catch (err) {
            console.warn(`${fn.name} faild: ${err}`);
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
}
else {
    startApp();
}
*/