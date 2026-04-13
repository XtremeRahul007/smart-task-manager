export function showToast(message, type) {
    const container = document.getElementById("toastContainer");
    if (!container)
        return;
    const duration = 3000;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    const progress = document.createElement("div");
    progress.className = "toast-progress";
    toast.appendChild(progress);
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    let animation = progress.animate([
        { transform: "ScaleX(1)" },
        { transform: "ScaleX(0)" }
    ], {
        duration: duration,
        easing: "linear"
    });
    setTimeout(() => {
        toast.classList.remove("show");
    }, duration);
    animation.onfinish = () => {
        progress.remove();
        setTimeout(() => {
            toast.remove();
        }, 300);
    };
    toast.addEventListener("click", () => {
        toast.classList.remove("show");
        setTimeout(() => {
            progress.remove();
            toast.remove();
        }, 500);
    });
}
//# sourceMappingURL=toastService.js.map