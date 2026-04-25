import { closeState, activeState } from "../state/uiState.js";
import { signUpUser, loginUser } from "../services/authService.js";
import { showToast } from "../services/toastService.js";
import { initProfileIcon } from "./profileIcon.js";
let mode = "signup";
const submitBtn = document.querySelector(".submitBtn");
let closeFormRef = null;
export function initUserServiceForm() {
    const form = document.getElementById("userServiceFormContainer");
    const heading = document.querySelector(".userServiceHeading");
    const switchText = document.querySelector(".modeSwitchText");
    const modeSwitchBtn = document.getElementById("modeSwitchBtn");
    const nameLabel = document.querySelector(".displayNameLabel");
    const passLabel = document.querySelector(".passwordLabel");
    /*const btn = document.getElementById("test_trigger");*/
    if (!form)
        return {
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
    };
    const closeForm = () => {
        form.classList.remove("open");
        const handleTransitionEnd = () => {
            form.style.display = "none";
            form.removeEventListener("transitionend", handleTransitionEnd);
        };
        form.addEventListener("transitionend", handleTransitionEnd);
        closeState("userServiceForm");
        isOpen = false;
    };
    closeFormRef = closeForm;
    const switchMode = () => {
        if (mode === "signup") {
            mode = "signin";
            heading.textContent = "Welcome Back";
            submitBtn.textContent = "Sign in";
            switchText.textContent = "Don't have an account?";
            modeSwitchBtn.textContent = "Sign up";
            nameLabel.textContent = "Enter your username";
            passLabel.textContent = "Enter your password";
        }
        else {
            mode = "signup";
            heading.textContent = "Create your local profile";
            submitBtn.textContent = "Create an account";
            switchText.textContent = "Already have an account?";
            modeSwitchBtn.textContent = "Sign in";
            nameLabel.textContent = "Choose a username";
            passLabel.textContent = "Choose a password";
        }
    };
    modeSwitchBtn?.addEventListener("click", switchMode);
    /*btn.addEventListener("click", toggleForm);*/
    return { openForm };
}
function saveSession(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}
export function getCurrentUser() {
    const data = localStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
}
export function logoutUser() {
    localStorage.removeItem("currentUser");
    location.reload();
}
export function initAuthController() {
    const form = document.getElementById("userServiceForm");
    if (!form)
        return;
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        // showToast("Form Submitted", "info")
        const name = document.getElementById("displayName").value;
        const password = document.getElementById("password").value;
        const user = { name, password };
        try {
            let message = "";
            if (mode === "signup") {
                message = await signUpUser(user);
                showToast(message, "success");
                closeFormRef?.();
                console.log("closeFormRef:", closeFormRef);
                saveSession(user);
                initProfileIcon(user.name);
            }
            else {
                message = await loginUser(user);
                showToast(message, "success");
                closeFormRef?.();
                console.log("closeFormRef:", closeFormRef);
                saveSession(user);
                initProfileIcon(user.name);
            }
            console.log(message);
        }
        catch (err) {
            showToast(err, "error");
        }
    });
}
//# sourceMappingURL=authForm.js.map