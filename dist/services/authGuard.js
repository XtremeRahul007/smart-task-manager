import { getCurrentUser } from "../components/authForm.js";
import { logoutUser } from "../components/authForm.js";
import { showToast } from "./toastService.js";
import { clearAllStores } from "../db/dbUtils.js";
export function initAuthGuard(openForm) {
    const user = getCurrentUser();
    if (!user) {
        showToast("Welcome to Xtreme Task Manager", "info");
        openForm();
    }
    else {
        showToast(`Welcome Back: ${user.name}`, "info");
    }
}
export function initLogoutUser() {
    const logoutBtn = document.getElementById("logoutBth");
    logoutBtn?.addEventListener("click", () => {
        logoutUser();
    });
}
export function togglePasswordVisibility() {
    const togglebth = document.getElementById("toggleVisibility");
    const passwordInput = document.getElementById("password");
    togglebth.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglebth.classList.add("icon-invisible");
            togglebth.classList.remove("icon-visible");
        }
        else {
            passwordInput.type = "password";
            togglebth.classList.add("icon-visible");
            togglebth.classList.remove("icon-invisible");
        }
    });
}
export function resetDatabase() {
    const btn = document.getElementById("resetDbBtn");
    btn?.addEventListener("click", () => {
        clearAllStores("smartTaskManagerDB");
        logoutUser();
    });
}
//# sourceMappingURL=authGuard.js.map