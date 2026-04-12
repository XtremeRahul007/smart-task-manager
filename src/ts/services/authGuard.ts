import { getCurrentUser } from "../components/authForm.js";
import { logoutUser } from "../components/authForm.js";
import { showToast } from "./toastService.js";

export function initAuthGuard(openForm: () => void) {
    const user = getCurrentUser();

    if (!user) {
        showToast("Welcome to Xtreme Task Manager", "info");
        openForm();
    } else {
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
    const togglebth = document.getElementById("toggleVisibility") as HTMLButtonElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    togglebth.addEventListener("click", () =>{
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglebth.classList.add("icon-invisible");
            togglebth.classList.remove("icon-visible");
        } else {
            passwordInput.type = "password";
            togglebth.classList.add("icon-visible");
            togglebth.classList.remove("icon-invisible");
        }
    });
}