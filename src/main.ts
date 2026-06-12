import './styles/main.scss';
import { openDB } from "./ts/db/indexedDB.js";
import { initLogoutUser, initAuthGuard, togglePasswordVisibility, resetDatabase } from "./ts/services/authGuard.js";
import { initUserServiceForm, initAuthController } from "./ts/components/authForm.js";
import { initTheme } from "./ts/theme/themeManager.js";
import { setupThemeToggle } from "./ts/theme/themeToggle.js";
import { overLayToggle } from "./ts/components/overLay.js";
import { initLandingView } from "./ts/state/viewState.js";
import { initCreateTaskView } from "./ts/views/createTaskView.js";
import { initIdleView } from "./ts/views/idleView.js";
import { initPopupMenu } from "./ts/components/popupMenu.js";
import { initSidebar, viewMenuController } from "./ts/components/sideBar.js";
import { searchBarFocus } from "./ts/components/searchBar.js";
import { initProfileIcon } from "./ts/components/profileIcon.js";
import { addClickAnimation } from "./ts/animations/clickAnimation.js";
import { hideLoader } from "./ts/services/loaderService.js";

const criticalModules: Array<() => void> = [openDB, initAuthController];

const semiCriticalModules: Array<() => void> = [overLayToggle, togglePasswordVisibility, initTheme, setupThemeToggle, initLogoutUser, resetDatabase];

const renderingModulers: Array<() => void> = [viewMenuController, initCreateTaskView, initIdleView];

const uiModules: Array<() => void> = [initPopupMenu, initSidebar, searchBarFocus, initProfileIcon, addClickAnimation];

async function runModules(modules: Array<() => any>, label: string) {
    for (const fn of modules) {
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

    hideLoader();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        startApp();
        initLandingView();
    });
}

else {
    startApp();
    initLandingView();
}