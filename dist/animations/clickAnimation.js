export function addClickAnimation() {
    const elementBth = document.getElementById("theme-toggle-btn");
    const elementIcon = document.getElementById("theme-toggle-icon");
    if (!elementBth)
        return;
    elementBth.addEventListener("click", () => {
        elementIcon.classList.remove("animate-once");
        void elementIcon.offsetWidth;
        elementIcon.classList.add("animate-once");
    });
    elementIcon.addEventListener("animationend", () => {
        elementIcon.classList.remove("animate-once");
    });
}
//# sourceMappingURL=clickAnimation.js.map