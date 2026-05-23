import { closeState, activeState } from "../state/uiState.js";
import { signUpUser, loginUser } from "../services/authService.js";
import { showToast } from "../services/toastService.js";
import { initProfileIcon } from "./profileIcon.js";

let mode = "signup";
const submitBtn = document.querySelector<HTMLButtonElement>(".submitBtn");
let closeFormRef: (() => void) | null = null;

export function initUserServiceForm() {
    const form = document.getElementById("userServiceFormContainer") as HTMLFormElement;
    const heading = document.querySelector<HTMLHeadingElement>(".userServiceHeading");
    const switchText = document.querySelector<HTMLParagraphElement>(".modeSwitchText");
    const modeSwitchBtn = document.getElementById("modeSwitchBtn") as HTMLButtonElement;
    const nameLabel = document.querySelector<HTMLLabelElement>(".displayNameLabel");
    const passLabel = document.querySelector<HTMLLabelElement>(".passwordLabel");

    if (!form) return {
        openForm: () => { }
    };

    let isOpen = false;
    let needOverlay = true;
    let dismissibleOverlay = false;

    const openForm = () => {
        form.style.display = "grid";
        requestAnimationFrame(() => {
            form.classList.add("open");
        });
        activeState("userServiceForm", closeForm, needOverlay, dismissibleOverlay);
        isOpen = true;
    }

    const closeForm = () => {
        form.classList.remove("open");
        const handleTransitionEnd = () => {
            form.style.display = "none";
            form.removeEventListener("transitionend", handleTransitionEnd);
        };
        form.addEventListener("transitionend", handleTransitionEnd);

        closeState("userServiceForm");
        isOpen = false;
    }

    closeFormRef = closeForm;

    const switchMode = () => {
        if (mode === "signup") {
            mode = "signin";

            heading!.textContent = "Welcome Back";
            submitBtn!.textContent = "Sign in";
            switchText!.textContent = "Don't have an account?";
            modeSwitchBtn!.textContent = "Sign up";
            nameLabel!.textContent = "Enter your username";
            passLabel!.textContent = "Enter your password";
        }
        else {
            mode = "signup";

            heading!.textContent = "Create your local profile";
            submitBtn!.textContent = "Create an account";
            switchText!.textContent = "Already have an account?";
            modeSwitchBtn!.textContent = "Sign in";
            nameLabel!.textContent = "Choose a username";
            passLabel!.textContent = "Choose a password";
        }
    };

    modeSwitchBtn?.addEventListener("click", switchMode);
    return { openForm };
}

function saveSession(user: any) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
    const data: any = localStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
}

export function logoutUser() {
    localStorage.removeItem("currentUser");
    location.reload();
}

export function initAuthController() {
    const form = document.getElementById("userServiceForm") as HTMLFormElement;

    if (!form) return;

    form!.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = (document.getElementById("displayName") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        const user = { name, password };

        try {
            let message = "";


            if (mode === "signup") {
                message = await signUpUser(user);
                showToast(message, "success");
                closeFormRef?.();
                saveSession(user)
                initProfileIcon(user.name as string | null);
            } else {
                message = await loginUser(user);
                showToast(message, "success");
                closeFormRef?.();
                saveSession(user);
                initProfileIcon(user.name as string | null);
            }
        }
        catch (err) {
            showToast(err as string, "error");
        }
    });
}