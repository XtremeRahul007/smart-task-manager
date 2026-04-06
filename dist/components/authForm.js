import { closeState, activeState } from "../state/uiState.js";
export function initUserServiceForm() {
    const form = document.getElementById("userServiceForm");
    const heading = document.querySelector(".userServiceHeading");
    const submitBtn = document.querySelector(".submitBtn");
    const switchText = document.querySelector(".modeSwitchText");
    const modeSwitchBtn = document.getElementById("modeSwitchBtn");
    /*const btn = document.getElementById("test_trigger");*/
    if (!form)
        return;
    let isOpen = false;
    let needOverlay = true;
    let mode = "signup";
    let dismissibleOverlay = false;
    const openForm = () => {
        form.classList.add("open");
        activeState("userServiceForm", closeForm, needOverlay, dismissibleOverlay);
        isOpen = true;
    };
    const closeForm = () => {
        form.classList.remove("open");
        closeState("userServiceForm");
        isOpen = false;
    };
    const toggleForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? closeForm : openForm();
    };
    const switchMode = () => {
        if (mode === "signup") {
            mode = "signin";
            heading.textContent = "Welcome Back";
            submitBtn.textContent = "Sign in";
            switchText.textContent = "Don't have an account?";
            modeSwitchBtn.textContent = "Sign up";
        }
        else {
            mode = "signup";
            heading.textContent = "Create your local profile";
            submitBtn.textContent = "Create an account";
            switchText.textContent = "Already have an account?";
            modeSwitchBtn.textContent = "Sign in";
        }
    };
    modeSwitchBtn?.addEventListener("click", switchMode);
    /*btn.addEventListener("click", toggleForm);*/
}
//# sourceMappingURL=authForm.js.map