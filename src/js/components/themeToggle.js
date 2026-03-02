export function themeToggle() {
    const themeBth = document.getElementById("theme-toggle-btn");
    const rootElement = document.documentElement;
    const themeIco = document.getElementById("theme-toggle-icon");

    themeBth.addEventListener("click", () => {
        rootElement.classList.toggle("dark-theme");
        themeIco.classList.toggle("icon-light-mode");
        themeIco.classList.toggle("icon-dark-mode");
    });
}